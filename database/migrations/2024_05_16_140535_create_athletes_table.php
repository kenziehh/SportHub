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
        Schema::create('athletes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string("image_url")->nullable();
            $table->unsignedBigInteger('team_id');
            $table->string('country');
            $table->string('sport_category');
            $table->timestamps();
            $table->foreign('team_id')->references('id')->on('teams');
            //     table: 'teams',
            //     indexName: 'athlete_team_id'
            // );            // $table->foreign('team_id')->references('id')->on('teams');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('athlete');
    }
};
