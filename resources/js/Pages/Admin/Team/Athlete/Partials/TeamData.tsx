import { TeamResponse } from "@/types/responseData";
import React from "react";

const TeamData = ({ teamData }: { teamData: TeamResponse }) => {
    return (
        <section className="py-10 flex flex-col md:flex-row gap-6 md:gap-10">
            <img
                src={
                    teamData.team_logo
                        ? teamData.team_logo.startsWith("team_images")
                            ? `/storage/${teamData.team_logo}`
                            : teamData.team_logo
                        : ""
                }
                alt=""
                className="w-full h-auto md:max-w-96"
            />
            <div className="text-justify flex-flex-col gap-2 md:self-end">
                <div className="flex items-center gap-2 text-2xl font-semibold">
                    <h2>Team Name:</h2>
                    <h2>{teamData.name}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <h2>Stadion:</h2>
                    <h2>{teamData.station}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <h2>Country:</h2>
                    <h2>{teamData.country}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <h2>Sport Category:</h2>
                    <h3>{teamData.sport_category}</h3>
                </div>
            </div>
        </section>
    );
};

export default TeamData;
