<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class HighlightFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sport_match_id' => random_int(1, 10),
            'title' => fake()->sentence(),
            'description' => fake()->sentence(),
            'video_url' => fake()->url(),
        ];
    }
}
