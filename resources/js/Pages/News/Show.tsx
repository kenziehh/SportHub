import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";

export default function Show({ auth, newsData }: PageProps) {
    console.log(newsData);
    return (
        <Layout user={auth.user}>
            <section className="relative clip-path-news rounded-3xl">
                <img
                    src={
                        newsData.data.image_url
                            ? newsData.data.image_url.startsWith("news_images")
                                ? `/storage/${newsData.data.image_url}`
                                : newsData.data.image_url
                            : ""
                    }
                    alt=""
                    className="max-h-[650px] w-full rounded-3xl"
                />
                <div className="absolute bottom-16 left-16 flex flex-col gap-y bg-transparent px-8 py-6 rounded-3xl">
                    <h2 className="text-[24px] md:text-[56px] text-white font-semibold xl:max-w-[800px]">
                        {newsData.data.title}
                    </h2>
                    <span className="text-[#FFAB41]">
                        {newsData.data.author +
                            " | " +
                            newsData.data.release_date.split(" ")[0]}
                    </span>
                </div>
            </section>
            <section className="py-20">
                {newsData.data.content}
            </section>
        </Layout>
    );
}
