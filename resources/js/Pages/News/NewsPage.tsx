import Navbar from "@/Components/navbar";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import React from "react";

export default function NewsPage({ auth, news }: PageProps) {
    console.log(news);
    return (
        <>
            <Navbar user={auth.user} />
            <main></main>
        </>
    );
}
