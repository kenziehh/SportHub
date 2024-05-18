<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Athlete extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'country',
        'image_url',
        'team_id',
        'sport_category',
    ];
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
