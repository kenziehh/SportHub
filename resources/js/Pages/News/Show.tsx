import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";

export default function Show({ auth, newsData }: PageProps) {
    console.log(newsData);
    return <Layout user={auth.user}></Layout>;
}
