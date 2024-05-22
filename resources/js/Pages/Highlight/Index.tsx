import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import Hero from "./Partials/Hero";
import AllHighlight from "./Partials/AllHighlight";

export default function HighlightPage({ auth, highlight }: PageProps) {
    console.log(highlight);
    return (
        <Layout user={auth.user}>
            <h1 className="text-3xl md:text-6xl mb-10">Highlights</h1>

            <Hero />
            <AllHighlight highlights={highlight.data} links={highlight.meta} />
        </Layout>
    );
}
