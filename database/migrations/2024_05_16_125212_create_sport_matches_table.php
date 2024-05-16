<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sport_matches', function (Blueprint $table) {
            $table->id();
            $table->string("category");
            $table->string("tournament_name");
            $table->unsignedBigInteger("home_team_id");
            $table->unsignedBigInteger("away_team_id");
            $table->integer("home_score");
            $table->integer("away_score");
            $table->dateTime('match_datetime');
            $table->timestamps();
            $table->foreign('home_team_id')->references('id')->on('teams');
            $table->foreign('away_team_id')->references('id')->on('teams');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sport_matches');
    }
};
