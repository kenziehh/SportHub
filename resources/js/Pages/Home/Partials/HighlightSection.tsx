import PrimaryButton from "@/Components/PrimaryButton";
import YoutubePlayer from "@/Components/youtube";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const HighlightSection = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <section className="container py-20 flex-col gap-14">
            <div className="flex justify-between items-end font-semibold">
                <h1 className="text-3xl md:text-6xl">Highlights</h1>
                <PrimaryButton>
                    <Link href="/highlight">See more</Link>
                </PrimaryButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-between gap-6 mt-6 md:mt-14">
                {[1, 2, 3, 4].map((index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-center bg-gray-300 text-2xl transition-all duration-300 rounded-[32px] object-fill ${
                            hoveredIndex === index ? "col-span-4 z-10" : ""
                        } ${
                            hoveredIndex !== null && hoveredIndex !== index
                                ? "hidden"
                                : "block"
                        }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <YoutubePlayer
                            videoId="OelxFPuw2sI"
                            height={isMobile ? "300px" : "700px"}
                            className="w-full rounded-[32px]"
                        />
                    </div>
                ))}
            </div>
            {/* <YoutubePlayer
                videoId={hoveredId}
                width="100%"
                // width={hoveredIndex === index ? "100%" : "100%"}
                height={isMobile ? "300px" : "700px"}
            /> */}
        </section>
    );
};

export default HighlightSection;
