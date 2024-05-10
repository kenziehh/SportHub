import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/navbar";

export default function Welcome({ auth }: PageProps<{}>) {
    return (
        <>
            <Head title="Welcome" />

            <Navbar auth={auth} />
        </>
    );
}
