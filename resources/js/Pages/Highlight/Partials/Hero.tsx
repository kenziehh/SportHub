import HighlightCard from "@/Components/card/highligt";
import YoutubePlayer from "@/Components/youtube";
import React from "react";

const Hero = () => {
    return (
        <section className="flex flex-col gap-10 md:flex-row md:gap-20">
            <div className="flex flex-row gap-10">
                <div className="max-w-[1000px]">
                    <YoutubePlayer
                        videoId="8xhnDGF06s0"
                        width="1000px"
                        height="700px"
                    />
                    <h2 className="text-[32px] md:text-[56px]">
                        PSG vs Borussia Dortmund 0-1 [AGG 0-2] Highlights
                    </h2>
                </div>
                <div className="flex flex-col gap-10 ">
                    <HighlightCard
                        youtubeId="rXBGr2EpM5M"
                        title="City Vs Madrid"
                    />
                    <HighlightCard
                        youtubeId="rXBGr2EpM5M"
                        title="City Vs Madrid"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
