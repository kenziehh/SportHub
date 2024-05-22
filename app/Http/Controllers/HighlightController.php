<?php

namespace App\Http\Controllers;

use App\Models\Highlight;
use App\Http\Requests\StoreHighlightRequest;
use App\Http\Requests\UpdateHighlightRequest;
use App\Http\Resources\SportMatchResource;
use App\Http\Resources\HighlightResource;
use App\Models\SportMatch;
use Inertia\Inertia;

class HighlightController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Highlight::query();
        $highlight = $query->paginate();
        return Inertia('Admin/Match/Highlight/Index', [
            'highlight' => HighlightResource::collection($highlight)
        ]);
    }
    public function __invoke()
    {
        $query = Highlight::query();
        $highlight = $query->paginate();
        return Inertia('Highlight/Index', [
            'highlight' => HighlightResource::collection($highlight)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHighlightRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Highlight $highlight)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Highlight $highlight)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHighlightRequest $request, Highlight $highlight)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Highlight $highlight)
    {
        //
    }

    public function getMatchHighlights(SportMatch $sportMatch)
    {
        $athletes = $sportMatch->highlights()->get();
        return Inertia::render('Admin/Team/Athlete/Index', [
            'teamData' => new SportMatchResource($sportMatch),
            'athletes' => Highlight::collection($athletes)
        ]);
    }
}
