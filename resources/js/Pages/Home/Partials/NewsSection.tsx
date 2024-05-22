import NewsCard from "@/Components/card/newsCard";
import Pagination from "@/Components/pagination";
import PrimaryButton from "@/Components/button/primary";
import { Meta, NewsResponse } from "@/types/responseData";
import { truncateText } from "@/Utils/truncateText";
import { Link } from "@inertiajs/react";

const NewsHome = ({ news, meta }: { news: NewsResponse[]; meta: Meta }) => {
    return (
        <>
            <section className="py-10 flex gap-6 md:gap-0 justify-between">
                <h2 className="text-5xl font-semibold">News</h2>
                <Link href="/news">
                    <PrimaryButton>See more</PrimaryButton>
                </Link>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
                {news.map((newsData: NewsResponse) => {
                    return <NewsCard newsData={newsData} />;
                })}
            </section>
            <Pagination links={meta.links} />
        </>
    );
};

export default NewsHome;
