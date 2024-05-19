import Pagination from "@/Components/pagination";
import { Meta, NewsResponse } from "@/types/responseData";
import { truncateText } from "@/Utils/truncateText";
import React from "react";

const NewsHome = ({ news, meta }: { news: NewsResponse[]; meta: Meta }) => {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 mt-40">
                {news.map((newsData: NewsResponse) => {
                    return (
                        <div
                            className="flex flex-col justify-between gap-6"
                            key={newsData.id}
                        >
                            <img
                                src={newsData.image_url}
                                alt=""
                                className="rounded-[32px]"
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
