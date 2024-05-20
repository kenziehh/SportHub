import YoutubePlayer from "@/Components/youtube";

const HighlightSection = () => {
    return (
        <section className="container pt-20 pb-40">
            <div className="flex flex-col gap-4 md:gap-14 max-w-[1000px]">
                <YoutubePlayer videoId="OelxFPuw2sI" />
                <h1 className="md:text-[72px] font-semibold">
                    Will Eden Hazard Leave Chelsea if their transfer ban gets
                    upheld?
                </h1>
            </div>
            <div></div>
        </section>
    );
};

export default HighlightSection;
