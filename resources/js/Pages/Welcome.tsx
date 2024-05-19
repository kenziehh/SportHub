import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/navbar";
import { NewsResponse } from "@/types/responseData";
import Pagination from "@/Components/pagination";
import { truncateText } from "@/Utils/truncateText";
export default function Welcome({ auth, news }: PageProps) {
    console.log(news);
    return (
        <>
            <Head title="Welcome" />
            <Navbar authenticated={auth.user} />
            <main className="container">
                <section
                    className="relative h-[100vh] bg-cover bg-center bg-no-repeat rounded-3xl"
                    style={{
                        backgroundImage: "url(/assets/hero.svg)",
                        backgroundRepeat: "no-repeat",
                    }}
                ></section>

                <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 mt-40">
                    {news.data.map((newsData: NewsResponse) => {
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
                <Pagination links={news.meta.links} />
            </main>
        </>
    );
}
