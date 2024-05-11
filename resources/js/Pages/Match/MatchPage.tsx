import Navbar from "@/Components/navbar";
import { PageProps } from "@/types";

import React from "react";

const MatchPage = ({ auth, match }: PageProps) => {
    console.log(match);
    return (
        <div>
            <Navbar user={auth.user} />
        </div>
    );
};

export default MatchPage;
