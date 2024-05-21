import PolygonButton from "@/Components/button/polygonButton";
import { NewsResponse } from "@/types/responseData";
import { truncateText } from "@/Utils/truncateText";

const NewsCard = ({ newsData }: { newsData: NewsResponse }) => {
    return (
        <div className="flex flex-col gap-6" key={newsData.id}>
            <div className="relative group">
                <img
                    src={
                        newsData.image_url
                            ? newsData.image_url.startsWith("news_images")
                                ? `/storage/${newsData.image_url}`
                                : newsData.image_url
                            : ""
                    }
                    alt=""
                    className="rounded-[32px] w-full h-72 clip-path-hover"
                />
                {/* <button className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click Me
                </button> */}
                <PolygonButton className="absolute bottom-0 -right-12 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h6 className="text-red">{newsData.category}</h6>
                    <span>
                        {newsData.author +
                            " | " +
                            newsData.release_date.split(" ")[0]}
                    </span>
                </div>
                <div className="flex flex-col justify-between h-[20vh]">
                    <h2 className="font-semibold text-3xl">{newsData.title}</h2>
                    <h6 className="text-justify">
                        {truncateText(newsData.content, 40)}
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
