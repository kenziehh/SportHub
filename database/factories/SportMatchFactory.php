<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SportMatch>
 */
class SportMatchFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category' => fake()->randomElement(['basketball', 'football']),
            'home_team_id' => fake()->numberBetween(1, 10),
            'home_score' => fake()->numberBetween(0, 5),
            'away_team_id' => 2,
            'away_score' => fake()->numberBetween(0, 5),
            'match_datetime' => fake()->dateTimeThisMonth(),
            'tournament_name' => fake()->sentence(),

        ];
    }
}
