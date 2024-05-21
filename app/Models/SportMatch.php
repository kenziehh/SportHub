<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SportMatch extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'tournament_name',
        'home_team_id',
        'away_team_id',
        'home_score',
        'match_datetime',
    ];

    public function homeTeam()
    {
        return $this->belongsTo(Team::class, 'home_team_id');
    }

    public function awayTeam()
    {
        return $this->belongsTo(Team::class, 'away_team_id');
    }

    public function highlights()
    {
        return $this->hasMany(Highlight::class);
    }
}
