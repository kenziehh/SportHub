import Pagination from "@/Components/pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import { Meta, NewsResponse } from "@/types/responseData";
import { truncateText } from "@/Utils/truncateText";
import { Link } from "@inertiajs/react";

const NewsHome = ({ news, meta }: { news: NewsResponse[]; meta: Meta }) => {
    return (
        <>
            <section className="py-10 flex gap-6 md:gap-0 justify-between">
                <h2 className="text-5xl font-semibold">News</h2>
                <PrimaryButton>
                    <Link href="/news">See more</Link>
                </PrimaryButton>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
                {news.map((newsData: NewsResponse) => {
                    return (
                        <div
                            className="flex flex-col justify-between gap-6"
                            key={newsData.id}
                        >
                            <img
                                src={
                                    newsData.image_url
                                        ? newsData.image_url.startsWith(
                                              "news_images"
                                          )
                                            ? `/storage/${newsData.image_url}`
                                            : newsData.image_url
                                        : ""
                                }
                                alt=""
                                className="rounded-[32px] w-full max-h-72"
                            />
                            <div className="flex flex-col gap-4">
                                <h6 className="text-red">
                                    {newsData.category}
                                </h6>
                                <div className="flex justify-between flex-col gap-8">
                                    <h2 className="font-semibold text-3xl">
                                        {newsData.title}
                                    </h2>
                                    <h6 className="text-justify">
                                        {truncateText(newsData.content, 40)}
                                    </h6>
                                </div>
                            </div>
                            <span>
                                {newsData.author +
                                    " | " +
                                    newsData.release_date.split(" ")[0]}
                            </span>
                        </div>
                    );
                })}
            </section>
            <Pagination links={meta.links} />
        </>
    );
};

export default NewsHome;
