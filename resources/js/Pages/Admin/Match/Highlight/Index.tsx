import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

export default function HighlightDashboard({ auth, highlight }: PageProps) {
    console.log(highlight);
    return (
        <Authenticated user={auth.user}>
            <table>
                <thead>
                    <tr></tr>
                </thead>
                <tbody></tbody>
            </table>
        </Authenticated>
    );
}
