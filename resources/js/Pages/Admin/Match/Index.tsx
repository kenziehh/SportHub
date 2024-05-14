import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { MatchResponse } from "@/types/responseData";
import { Link, router } from "@inertiajs/react";

const MatchDashboard = ({ auth, match }: PageProps) => {
    console.log(match);
    const deleteMatch = (matchParams: MatchResponse) => {
        console.log(matchParams.id);
        router.delete(route("match.destroy", matchParams.id), {
            onSuccess: (page) => {
                console.log("Delete successful", page);
                // Optionally, refresh the list or show a success message
            },
            onError: (errors) => {
                console.error("Delete failed", errors);
                // Optionally, show an error message to the user
            },
        });
    };
    return (
        <Authenticated user={auth.user}>
            <main className="container">
                <section className="flex justify-between py-10 items-center">
                    <h2 className="text-4xl">Match</h2>
                    <SecondaryButton>
                        <Link href={route("match.create")} className="">
                            Create
                        </Link>
                    </SecondaryButton>
                </section>
                <section className="overflow-x-auto">
                    <table className="">
                        <th className="text-center px-2 py-3 border-2">
                            Home Team
                        </th>
                        <th className="text-center px-2 py-3 border-2">
                            Home Score
                        </th>
                        <th className="text-center px-2 py-3 border-2">
                            Home Image
                        </th>
                        <th className="text-center px-2 py-3 border-2">
                            Away Team
                        </th>
                        <th className="text-center px-2 py-3 border-2">
                            Away Score
                        </th>
                        <th className="text-center px-2 py-3 border-2">
                            Away Image
                        </th>
                        <th className="text-center px-2 py-3 border-2">
                            Place
                        </th>
                        <th className="text-center px-2 py-3 border-2">
                            Category
                        </th>

                        <th className="text-center px-2 py-3 border-2">
                            Action
                        </th>
                        {match.data.map((matchData: MatchResponse) => {
                            return (
                                <tr key={matchData.id}>
                                    <td className="px-2 py-3 border-2 max-w-sm md:text-justify">
                                        {matchData.home_team}
                                    </td>
                                    <td className="px-2 py-3 border-2 max-w-6xl text-justify">
                                        {matchData.home_score}
                                    </td>
                                    <td className="px-2 py-3 border-2">
                                        <img
                                            src={matchData.home_image}
                                            alt=""
                                            className="max-w-24 max-h-24 md:max-w-48 md:max-h-48"
                                        />
                                    </td>
                                    <td className="px-2 py-3 border-2 max-w-sm md:text-justify">
                                        {matchData.away_team}
                                    </td>
                                    <td className="px-2 py-3 border-2 max-w-6xl text-justify">
                                        {matchData.away_score}
                                    </td>
                                    <td className="px-2 py-3 border-2">
                                        <img
                                            src={matchData.away_image}
                                            alt=""
                                            className="max-w-24 max-h-24 md:max-w-48 md:max-h-48"
                                        />
                                    </td>
                                    <td className="px-2 py-3 border-2 max-w-6xl text-justify">
                                        {matchData.place}
                                    </td>
                                    <td className="px-2 py-3 border-2 max-w-6xl text-justify">
                                        {matchData.category}
                                    </td>
                                    <td className="px-2 py-3 border-2 text-justify">
                                        <div className="inline-flex flex-col gap-2">
                                            <PrimaryButton>Edit</PrimaryButton>
                                            <DangerButton
                                                onClick={(e) =>
                                                    deleteMatch(matchData)
                                                }
                                            >
                                                Delete
                                            </DangerButton>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                </section>
                <Pagination links={match.meta.links} />
            </main>
        </Authenticated>
    );
};

export default MatchDashboard;
