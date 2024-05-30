<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Highlight extends Model
{
    use HasFactory;

    protected $fillable =[
        'title',
        'sport_match_id',
        'description',
        'video_url',
    ];

    public function sportMatch()
    {
        return $this->belongsTo(SportMatch::class);
    }
}
