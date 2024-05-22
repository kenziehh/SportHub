import YoutubePlayer from "@/Components/youtube";
import React from "react";

const HighlightCard = ({
    youtubeId,
    title,
}: {
    youtubeId: string;
    title: string;
}) => {
    return (
        <div className="flex flex-col gap-10">
            <YoutubePlayer videoId={youtubeId} height="250px" width="400px" />
            <h3 className="text-[20px] font-semibold md:text-[32px]">
                {title}
            </h3>
        </div>
    );
};

export default HighlightCard;
