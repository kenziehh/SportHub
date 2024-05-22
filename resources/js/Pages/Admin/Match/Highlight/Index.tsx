import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

export default function HighlightDashboard({ auth, highlight }: PageProps) {
    return <Authenticated user={auth.user}>
        
    </Authenticated>;
}
