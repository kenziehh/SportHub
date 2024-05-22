import PolygonButton from "@/Components/button/polygonButton";
import NewsCard from "@/Components/card/newsCard";
import HeroSection from "@/Components/hero";
import Pagination from "@/Components/pagination";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { NewsResponse } from "@/types/responseData";

export default function NewsPage({ auth, news }: PageProps) {
    console.log(news);
    return (
        <Layout user={auth.user}>
            <HeroSection text="Temukan kabar terbaru dari dunia olahraga dengan sentuhan baru" />
            <section className="py-20">
                <h2 className="text-[32px] md:text-[56px] font-semibold">
                    News
                </h2>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
                {news.data.map((newsData: NewsResponse) => {
                    return <NewsCard newsData={newsData} />;
                })}
            </section>
            <Pagination links={news.meta.links} />
        </Layout>
    );
}
