import { MatchResponse } from "@/types/responseData";
import { convertDateFormat } from "@/Utils/convertDatetime";
import { truncateText } from "@/Utils/truncateText";
import { BsDot } from "react-icons/bs";

const MatchCard = ({ matchData }: { matchData: MatchResponse }) => {
    console.log(matchData);
    // Konversi datetime dari matchData ke format yang diinginkan
    const formattedDateTime = convertDateFormat(matchData.match_datetime);

    return (
        <div
            className="bg-black flex flex-col gap-5 px-10 py-5 rounded-3xl"
            style={{
                clipPath:
                    "polygon(20% 0, 12% 20%, 0% 20%, 0 100%, 100% 100%, 100% 0)",
            }}
        >
            <div className="text-grey text-center flex gap-[1px] items-center justify-center">
                {/* Premier League * Portman Road Stadion */}
                <p>{truncateText(matchData.tournament_name, 15)}</p>
                <BsDot className="text-white " size={16} />
                <p>{truncateText(matchData.place, 15)}</p>
            </div>
            <div className="flex gap-6 items-center">
                <div className="flex flex-col gap-1 font-semibold">
                    <span className="text-[#FFAB41]">
                        {formattedDateTime.month} {formattedDateTime.date}
                    </span>
                    <span className="text-white">{formattedDateTime.hour}</span>
                </div>
                <div className="flex gap-2">
                    <img
                        src={
                            matchData.home_team_logo
                                ? matchData.home_team_logo.startsWith(
                                      "team_images"
                                  )
                                    ? `/storage/${matchData.home_team_logo}`
                                    : matchData.home_team_logo
                                : "https://placehold.jp/150x150.png"
                        }
                        alt=""
                        className="max-w-14 max-h-56"
                    />
                    <img
                        src="https://placehold.jp/150x150.png"
                        alt=""
                        className="max-w-14 max-h-56"
                    />
                </div>
                <div className="text-white flex flex-col gap-1 w-full">
                    <div className="flex justify-between">
                        <p>{matchData.home_team}</p>
                        <span className="text-right">
                            {matchData.home_score}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <p>{matchData.away_team}</p>
                        <span className="text-right">
                            {matchData.away_score}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchCard;
