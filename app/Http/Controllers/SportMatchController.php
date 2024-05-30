<?php

namespace App\Http\Controllers;

use App\Models\SportMatch;
use App\Http\Requests\StoreSportMatchRequest;
use App\Http\Requests\UpdateSportMatchRequest;
use App\Http\Resources\HighlightResource;
use App\Http\Resources\SportMatchResource;
use App\Models\Highlight;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SportMatchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve all sport matches with related data, paginated with 12 items per page
        $matches = SportMatch::with(['homeTeam', 'awayTeam', 'highlights'])->paginate(10);

        $mappedData = $matches->items();

        $data = array_map(function ($match) {
            return [
                'id' => $match->id,
                'home_team' => $match->homeTeam->name,
                'home_score' => $match->home_score,
                'home_team_logo' => $match->homeTeam->team_logo,
                'away_team' => $match->awayTeam->name,
                'away_score' => $match->away_score,
                'match_datetime' => $match->match_datetime,
                'away_team_logo' => $match->awayTeam->team_logo,
                'place' => $match->homeTeam->station, // Assuming 'station' is the place
                'category' => $match->category,
                'tournament_name' => $match->tournament_name,
                'highlights' => $match->highlights->map(function ($highlight) {
                    return $highlight->video_url;
                })->toArray()
            ];
        }, $mappedData);

        // Return the data to the Inertia view with pagination info
        return Inertia::render('Admin/Match/Index', [
            'match' => $data,
            'pagination' => [
                'next_url' => $matches->nextPageUrl(),
                'prev_url' => $matches->previousPageUrl(),
            ],
        ]);
    }


    public function __invoke()
    {
        // Retrieve all sport matches with related data, paginated with 12 items per page
        $matches = SportMatch::with(['homeTeam', 'awayTeam', 'highlights'])->paginate(9);

        $mappedData = $matches->items();

        $data = array_map(function ($match) {
            return [
                'id' => $match->id,
                'home_team' => $match->homeTeam->name,
                'home_score' => $match->home_score,
                'home_team_logo' => $match->homeTeam->team_logo,
                'away_team' => $match->awayTeam->name,
                'match_datetime' => $match->match_datetime,
                'away_score' => $match->away_score,
                'away_team_logo' => $match->awayTeam->team_logo,
                'place' => $match->homeTeam->station, // Assuming 'station' is the place
                'category' => $match->category,
                'tournament_name' => $match->tournament_name,
                'highlights' => $match->highlights->map(function ($highlight) {
                    return $highlight->video_url;
                })->toArray()
            ];
        }, $mappedData);

        // Return the data to the Inertia view with pagination info
        return Inertia::render('Match/MatchPage', [
            'match' => $data,
            'pagination' => [
                'next_url' => $matches->nextPageUrl(),
                'prev_url' => $matches->previousPageUrl(),
            ],
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
    public function destroy($id)
    {
        $sportMatch = SportMatch::find($id);

        if (!$sportMatch) {
            return response()->json(['error' => 'SportMatch not found'], 404);
        }

        Log::info('Found SportMatch:', ['id' => $sportMatch->id]);

        $sportMatch->delete();
        return to_route('match.index')
            ->with('success', "match was deleted");
        // return response()->json(['message' => $sportMatch->id]);
    }

    public function getMatchHighlight(SportMatch $match)

    {
        // dd($match);
        $highlights = $match->highlights()->get();
        return Inertia::render('Admin/Match/Highlight/Index', [
            'highlight' => HighlightResource::collection($highlights)
        ]);
    }
}
