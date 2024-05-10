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
            'home_team' => fake()->name(),
            'home_score' => fake()->numberBetween(0, 5),
            'away_team' => fake()->name(),
            'away_score' => fake()->numberBetween(0, 5),
            'place' => fake()->city(),
            'home_image' => fake()->imageUrl(),
            'away_image' => fake()->imageUrl(),
            'match_datetime' => $this->faker->dateTimeBetween('-1 week', '+1 week'),
            'category' => fake()->randomElement(['basketball', 'football']),


        ];
    }
}
