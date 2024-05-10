import Navbar from "@/Components/navbar";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import { PageProps } from "@/types";

export default function NewsPage({ auth, news }: PageProps) {
    console.log(news);
    return (
        <>
            <Navbar auth={auth} />
            <main></main>
        </>
    );
}
