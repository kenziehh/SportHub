import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import Hero from "./Partials/Hero";

export default function HighlightPage({ auth, highlight }: PageProps) {
    console.log(highlight);
    return (
        <Layout user={auth.user}>
            <Hero />
        </Layout>
    );
}
