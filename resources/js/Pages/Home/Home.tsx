import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/navbar";
import { NewsResponse } from "@/types/responseData";
import Pagination from "@/Components/pagination";
import { truncateText } from "@/Utils/truncateText";
import NewsHome from "./Partials/NewsHome";
import Footer from "@/Components/footer";
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
                ></section>
                <NewsHome news={news.data} meta={news.meta} />
                <div className="mt-64"></div>
                <Footer />
            </main>
        </>
    );
}
