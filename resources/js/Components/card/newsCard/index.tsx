import { NewsResponse } from "@/types/responseData";
import { truncateText } from "@/Utils/truncateText";

const NewsCard = ({ newsData }: { newsData: NewsResponse }) => {
    return (
        <div className="flex flex-col justify-between gap-6" key={newsData.id}>
            <img
                src={
                    newsData.image_url
                        ? newsData.image_url.startsWith("news_images")
                            ? `/storage/${newsData.image_url}`
                            : newsData.image_url
                        : ""
                }
                alt=""
                className="rounded-[32px] w-full max-h-72"
            />
            <div className="flex flex-col gap-4">
                <h6 className="text-red">{newsData.category}</h6>
                <div className="flex justify-between flex-col gap-8">
                    <h2 className="font-semibold text-3xl">{newsData.title}</h2>
                    <h6 className="text-justify">
                        {truncateText(newsData.content, 40)}
                    </h6>
                </div>
            </div>
            <span>
                {newsData.author + " | " + newsData.release_date.split(" ")[0]}
            </span>
        </div>
    );
};

export default NewsCard;
