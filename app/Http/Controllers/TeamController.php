<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use App\Http\Resources\AthleteResource;
use App\Http\Resources\TeamResource;
use App\Models\Athlete;
use Inertia\Inertia;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Team::query();
        $teams = $query->paginate(20);
        return Inertia('Admin/Team/Index', [
            "teams" => TeamResource::collection($teams)
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
    public function store(StoreTeamRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeamRequest $request, Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        //
    }

    public function getTeamAthletes(Team $team)
    {
        $athletes = $team->athletes()->get();
        return Inertia::render('Admin/Team/Athlete/Index', [
            'teamData' => new TeamResource($team),
            'athletes' => AthleteResource::collection($athletes)
        ]);
    }
}