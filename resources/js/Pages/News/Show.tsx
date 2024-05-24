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
                    <h2 className="text-[24px] md:text-[56px] text-white">
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
                {/* {newsData.data.content} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quas ea rerum nesciunt illum quibusdam eum nam velit dignissimos
                deserunt, quaerat debitis explicabo dolores eius magnam ab omnis
                excepturi ullam? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Asperiores temporibus voluptate laudantium nam
                magni consequatur necessitatibus. Impedit tempora unde quia vero
                voluptatibus! Quam eaque exercitationem eveniet sapiente. Nisi,
                asperiores magnam.
            </section>
        </Layout>
    );
}
