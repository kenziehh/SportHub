import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";

export default function HighlightPage({ auth }: PageProps) {
    return (
        <Layout user={auth.user}>
            <section>
                
            </section>
        </Layout>
    );
}
