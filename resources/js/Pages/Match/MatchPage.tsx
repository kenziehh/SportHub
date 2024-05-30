import MatchCard from "@/Components/card/match";
import Navbar from "@/Components/navbar";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import MatchSection from "./Partials/MatchSection";

const MatchPage = ({ auth, match, pagination }: PageProps) => {
    return (
        <Layout user={auth.user}>
            <img
                src="/assets/highlight-hero.jpg"
                className="w-full h-[40vh] md:h-full"
            />
            <MatchSection
                matches={match}
                matchType="football"
                pagination={pagination}
            />

            <MatchSection
                matches={match}
                matchType="basketball"
                pagination={pagination}
            />
        </Layout>
    );
};

export default MatchPage;
