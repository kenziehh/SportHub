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
        $query = News::query();
        $news = $query->paginate(20);
        return Inertia('News/NewsPage', [
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
        $validated = $request->validated();
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsRequest $request, News $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        $title = $news->title;
        $news->delete();
        // if ($news->image_path) {
        //     Storage::disk('public')->deleteDirectory(dirname($news->image_url));
        // }
        // return response()->json(['message' => $title]);
        return to_route('news.index')
            ->with('success', "$news \"$title\" was deleted");
    }
}
