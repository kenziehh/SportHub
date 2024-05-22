import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import TeamData from "./Partials/TeamData";
import PrimaryButton from "@/Components/button/primary";
import { Link, router } from "@inertiajs/react";
import DangerButton from "@/Components/button/danger";
import { AthleteResponse } from "@/types/responseData";
import SecondaryButton from "@/Components/button/secondary";

export default function TeamAthlete({ auth, teamData, athletes }: PageProps) {
    console.log(athletes);
    console.log(teamData);
    const deleteAthlete = (athlete: AthleteResponse) => {
        router.delete(
            route("athlete.destroy", {
                team: teamData.data.id,
                athlete: athlete.id,
            })
        );
    };
    return (
        <Authenticated user={auth.user}>
            <main className="container">
                <TeamData teamData={teamData.data} />
                <section className="flex justify-between py-10 items-center">
                    <h2 className="text-4xl">Team Athlete</h2>
                    <SecondaryButton>
                        <Link
                            href={route("athlete.create", teamData.data.id)}
                            className=""
                        >
                            Create
                        </Link>
                    </SecondaryButton>
                </section>
                <section className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-center px-2 py-3 border-2">
                                    Id
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Name
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Image
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Country
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Sport Category
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {athletes.data.map(
                                (athletesData: AthleteResponse) => {
                                    return (
                                        <tr key={athletesData.id}>
                                            <td className="px-2 py-3 border-2 max-w-sm md:text-justify">
                                                {athletesData.id}
                                            </td>
                                            <td className="px-2 py-3 border-2 max-w-6xl text-justify">
                                                {athletesData.name}
                                            </td>
                                            <td className="px-2 py-3 border-2">
                                                <img
                                                    src={
                                                        athletesData.image_url
                                                            ? athletesData.image_url.startsWith(
                                                                  "athlete_images"
                                                              )
                                                                ? `/storage/${athletesData.image_url}`
                                                                : athletesData.image_url
                                                            : ""
                                                    }
                                                    alt="no picture"
                                                    className="max-w-48 max-h-48 md:max-w-96 md:max-h-96"
                                                />
                                            </td>
                                            <td className="px-2 py-3 border-2 text-justify">
                                                {athletesData.country}
                                            </td>
                                            <td className="px-2 py-3 border-2 text-justify">
                                                {athletesData.sport_category}
                                            </td>
                                            <td className="px-2 py-3 border-2 text-justify">
                                                <div className="inline-flex flex-col gap-2">
                                                    <PrimaryButton>
                                                        <Link
                                                            href={route(
                                                                "athlete.edit",
                                                                {
                                                                    team: teamData
                                                                        .data
                                                                        .id,
                                                                    athlete:
                                                                        athletesData.id,
                                                                }
                                                            )}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </PrimaryButton>
                                                    <DangerButton
                                                        onClick={(e) =>
                                                            deleteAthlete(
                                                                athletesData
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </DangerButton>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </section>
                {/* <Pagination links={athletes.meta.links} /> */}
            </main>
        </Authenticated>
    );
}
