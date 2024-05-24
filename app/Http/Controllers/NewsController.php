<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNewsRequest;
use App\Http\Requests\UpdateNewsRequest;
use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;


class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = News::query();
        $news = $query->paginate(20);
        return Inertia('Admin/News/Index', [
            "news" => NewsResource::collection($news)
        ]);
    }

    public function __invoke()
    {
        $news = News::latest()->paginate(6);
        return Inertia('Home/Home', [
            "news" => NewsResource::collection($news)
        ]);
    }

    public function getAllNews()
    {
        $query = News::query();
        $news = $query->paginate(12);
        return Inertia('News/Index', [
            "news" => NewsResource::collection($news)
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia("Admin/News/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsRequest $request)
    {
        // dd($request);
        $validated = $request->validated();
        // dd($validated);
        // Handle the image upload if provided
        if ($request->hasFile('image_url')) {
            $validated['image_url'] = $request->file('image_url')->store('news_images', 'public');
        }
        $news = News::create($validated);

        return to_route('news.index')->with('success', 'News "' . $news->title . '" was created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        return inertia('News/Show', [
            'newsData' => new NewsResource($news),
        ]);
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        return inertia('Admin/News/Edit', [
            'newsData' => new NewsResource($news),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsRequest $request, News $news)
    {
        // Validate the request data
        $validated = $request->validated();

        // Handle the image upload if provided
        if ($request->hasFile('image_url')) {
            // Delete the old image if it exists
            if ($news->image_url) {
                Storage::disk('public')->delete($news->image_url);
            }

            // Store the new image and update the image_url in the validated data
            $validated['image_url'] = $request->file('image_url')->store('news_images', 'public');
        }

        // Update the news with the validated data
        $news->update($validated);
        return to_route('news.index')->with('success', 'News "' . $news->title . '" was updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        // Path to the image file relative to the storage/app/public directory
        $news_image_path = 'news_images/' . $news->image_url;

        // Delete the news record
        $news->delete();

        // Check if the image file exists and delete it
        if (Storage::disk('public')->exists($news_image_path)) {
            Storage::disk('public')->delete($news_image_path);
        }

        return to_route('news.index')
            ->with('success', "News '{$news->title}' was deleted");
    }
}
