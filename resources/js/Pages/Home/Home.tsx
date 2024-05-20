import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/navbar";
import { NewsResponse } from "@/types/responseData";
import Pagination from "@/Components/pagination";
import { truncateText } from "@/Utils/truncateText";
import NewsHome from "./Partials/NewsSection";
import Footer from "@/Components/footer";
import YoutubePlayer from "@/Components/youtube";
import HighlightSection from "./Partials/HighlightSection";
export default function Home({ auth, news }: PageProps) {
    return (
        <>
            <Head title="Home" />
            <Navbar authenticated={auth.user} />
            <main className="container">
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
            </main>
            <HighlightSection />
            <Footer />
        </>
    );
}
