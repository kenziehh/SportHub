import PrimaryButton from "@/Components/button/primary";
import MatchCard from "@/Components/card/match";
import { MatchResponse } from "@/types/responseData";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const MatchSection = ({
    matchType = "football",
    matches,
    pagination,
}: {
    matchType: string;
    matches: MatchResponse[];
    pagination: any;
}) => {
    return (
        <>
            <section className="mt-6 md:mb-8 pb-12 flex justify-between items-center">
                <h2 className="text-[24px] md:text-[56px] font-semibold">
                    {matchType == "basketball"
                        ? "Basketball Match Schedule"
                        : "Football Match Schedule"}
                </h2>
                <PrimaryButton>Next <FaArrowRight className="ml-3 text-white" size={24}/></PrimaryButton>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-10">
                {matches.map((matchData: MatchResponse) => {
                    return <MatchCard matchData={matchData} />;
                })}
                
            </section>
        </>
    );
};

export default MatchSection;
