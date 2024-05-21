<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'country',
        'team_logo',
        'sport_category',
        'station',
    ];

    public function athletes()
    {
        return $this->hasMany(Athlete::class);
    }

    public function homeMatches()
    {
        return $this->hasMany(SportMatch::class, 'home_team_id');
    }

    public function awayMatches()
    {
        return $this->hasMany(SportMatch::class, 'away_team_id');
    }
}
