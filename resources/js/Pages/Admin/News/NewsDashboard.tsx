import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import React from "react";

const NewsDashboard = ({ auth, news }: PageProps) => {
    console.log(news);
    return <Authenticated user={auth.user}>
        
    </Authenticated>;
};

export default NewsDashboard;
