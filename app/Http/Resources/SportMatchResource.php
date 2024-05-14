<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SportMatchResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'home_team' => $this->home_team,
            'home_score' => $this->home_score,
            'away_team' => $this->away_team,
            'away_score' => $this->away_score,
            'place' => $this->place,
            'home_image' => $this->home_image,
            'away_image' => $this->away_image,
            'match_datetime' => $this->match_datetime,
            'category' => $this->category,
        ];
    }
}
