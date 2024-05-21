import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";
import { User } from "@/types";
import { PropsWithChildren, ReactNode } from "react";
export default function Layout({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <>
            <Navbar authenticated={user} />
            <main className="container">{children}</main>
            <Footer />
        </>
    );
}
