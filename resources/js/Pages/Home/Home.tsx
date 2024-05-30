import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import NewsHome from "./Partials/NewsSection";
import HighlightSection from "./Partials/HighlightSection";
import Layout from "@/Layouts/Layout";
import Marque from "@/Components/marque";
import { BsDot } from "react-icons/bs";
export default function Home({ auth, news }: PageProps) {
    return (
        <Layout user={auth.user}>
            <Head title="Home" />
            <Marque>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <BsDot size={20} className="text-[#FF1F57]" /> Live -
                        Real Madrid vs Barcelona
                    </div>
                    <div className="flex items-center gap-4">
                        <BsDot size={20} className="text-[#FF1F57]" /> Live -
                        Real Madrid vs Barcelona
                    </div>
                    <div className="flex items-center gap-4">
                        <BsDot size={20} className="text-[#FF1F57]" /> Live -
                        Real Madrid vs Barcelona
                    </div>
                    <div className="flex items-center gap-4">
                        <BsDot size={20} className="text-[#FF1F57]" /> Live -
                        Real Madrid vs Barcelona
                    </div>
                    <div className="flex items-center gap-4">
                        <BsDot size={20} className="text-[#FF1F57]" /> Live -
                        Real Madrid vs Barcelona
                    </div>
                    <div className="flex items-center gap-4">
                        <BsDot size={20} className="text-[#FF1F57]" /> Live -
                        Real Madrid vs Barcelona
                    </div>
                </div>
            </Marque>
            <section
                className="relative h-[1000px] bg-cover bg-center bg-no-repeat rounded-3xl mt-12"
                style={{
                    backgroundImage: "url(/assets/hero.svg)",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h1 className="md:h1 max-w-[870px] pt-10">
                    Will Eden Hazard Leave
                    <br /> Chelsea if their transfer <br />
                    ban gets upheld?
                </h1>
            </section>
            <NewsHome news={news.data} meta={news.meta} />
            <HighlightSection />
        </Layout>
    );
}
