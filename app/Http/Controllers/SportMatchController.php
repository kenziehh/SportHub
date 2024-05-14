<?php

namespace App\Http\Controllers;

use App\Models\SportMatch;
use App\Http\Requests\StoreSportMatchRequest;
use App\Http\Requests\UpdateSportMatchRequest;
use App\Http\Resources\SportMatchResource;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SportMatchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = SportMatch::query();
        $sportMatch = $query->paginate(20);
        return Inertia('Admin/Match/Index', [
            "match" => SportMatchResource::collection($sportMatch)
        ]);
    }

    public function __invoke()
    {
        $query = SportMatch::query();
        $sportMatch = $query->paginate(20);
        return Inertia('Match/MatchPage', [
            "match" => SportMatchResource::collection($sportMatch)
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
    public function store(StoreSportMatchRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SportMatch $sportMatch)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SportMatch $sportMatch)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSportMatchRequest $request, SportMatch $sportMatch)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SportMatch $sportMatch)
    {
        $id = $sportMatch->id;
        $sportMatch->delete();
        return to_route('match.index')
            ->with('success', "$sportMatch \"$id\" was deleted");
    }
}
