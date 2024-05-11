import Navbar from "@/Components/navbar";
import { PageProps } from "@/types";

import React from "react";

const MatchPage = ({ auth, news }: PageProps) => {
    return (
        <div>
            <Navbar user={auth.user} />
        </div>
    );
};

export default MatchPage;
