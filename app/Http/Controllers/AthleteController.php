<?php

namespace App\Http\Controllers;

use App\Models\Athlete;
use App\Http\Requests\StoreAthleteRequest;
use App\Http\Requests\UpdateAthleteRequest;
use App\Http\Resources\TeamResource;
use App\Models\Team;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AthleteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Team $team)
    {
        return Inertia('Admin/Team/Athlete/Create', [
            'teamData' => new TeamResource($team),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAthleteRequest $request)
    {
        $validated = $request->validated();
        // dd($validated);
        $team_id = $request->team_id;
        if ($request->hasFile('image_url')) {
            $validated['image_url'] = $request->file('image_url')->store('athlete_images', 'public');
        }
        $athlete = Athlete::create($validated);

        return to_route('team.athletes', $team_id)->with('success');
    }

    /**
     * Display the specified resource.
     */
    public function show(Athlete $athlete)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Athlete $athlete)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAthleteRequest $request, Athlete $athlete)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Athlete $athlete)
    {
        $athlete_image_path = 'athlete_images/' . $athlete->image_url;
        // Delete the news record
        $athlete->delete();

        // Check if the image file exists and delete it
        if (Storage::disk('public')->exists($athlete_image_path)) {
            Storage::disk('public')->delete($athlete_image_path);
        }

        return to_route('news.index')
            ->with('success', "News '{$athlete->name}' was deleted");
    }
}