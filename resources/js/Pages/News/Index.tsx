import NewsCard from "@/Components/card/newsCard";
import Navbar from "@/Components/navbar";
import Pagination from "@/Components/pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { NewsResponse } from "@/types/responseData";
import React from "react";

export default function NewsPage({ auth, news }: PageProps) {
    console.log(news);
    return (
        <Layout user={auth.user}>
            <section
                className="h-[58vh] flex justify-center items-center text-center"
                style={{
                    backgroundImage: `url("/assets/news-hero.svg")
            `,
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h2 className="text-white text-[32px] md:text-[56px] max-w-[750px]">
                    Temukan kabar terbaru dari dunia olahraga dengan sentuhan
                    baru
                </h2>
            </section>
            <section className="py-20">
                <h2>News</h2>
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
