import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import NewsHome from "./Partials/NewsSection";
import HighlightSection from "./Partials/HighlightSection";
import Layout from "@/Layouts/Layout";
export default function Home({ auth, news }: PageProps) {
    return (
        <Layout user={auth.user}>
            <Head title="Home" />
            <section
                className="relative h-[100vh] bg-cover bg-center bg-no-repeat rounded-3xl"
                style={{
                    backgroundImage: "url(/assets/hero.svg)",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* <h1 className="text-6xl md:text-[40px] xl:text-[70px] max-w-[870px]">
                        Will Eden Hazard Leave Chealsea if their transfer ban
                        gets upheld?
                    </h1> */}
            </section>
            <NewsHome news={news.data} meta={news.meta} />
            <HighlightSection />
        </Layout>
    );
}
