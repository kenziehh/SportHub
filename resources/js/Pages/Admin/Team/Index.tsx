import DangerButton from "@/Components/button/danger";
import PrimaryButton from "@/Components/button/primary";
import SecondaryButton from "@/Components/button/secondary";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { TeamResponse } from "@/types/responseData";
import { Link } from "@inertiajs/react";

export default function TeamDashboard({ auth, teams }: PageProps) {
    return (
        <Authenticated user={auth.user}>
            <main className="container">
                <section className="flex justify-between py-10 items-center">
                    <h2 className="text-4xl">Team</h2>
                    <SecondaryButton>
                        <Link href={route("team.create")} className="">
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
                                    Logo
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Country
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Category
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Station
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Player
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.data.map((teamData: TeamResponse) => {
                                return (
                                    <tr key={teamData.id}>
                                        <td className="px-2 py-3 border-2 max-w-sm md:text-center">
                                            {teamData.id}
                                        </td>
                                        <td className="px-2 py-3 border-2 max-w-sm md:text-center">
                                            {teamData.name}
                                        </td>
                                        <td className="px-2 py-3 border-2">
                                            <img
                                                src={
                                                    teamData.team_logo
                                                        ? teamData.team_logo.startsWith(
                                                              "team_images"
                                                          )
                                                            ? `/storage/${teamData.team_logo}`
                                                            : teamData.team_logo
                                                        : ""
                                                }
                                                alt="no picture"
                                                className="max-w-48 max-h-48 md:max-w-72 md:max-h-96"
                                            />
                                        </td>
                                        <td className="px-2 py-3 border-2 max-w-6xl text-center">
                                            {teamData.country}
                                        </td>
                                        <td className="px-2 py-3 border-2 text-center">
                                            {teamData.sport_category}
                                        </td>
                                        <td className="px-2 py-3 border-2 text-center">
                                            {teamData.station}
                                        </td>
                                        <td className="px-2 py-3 border-2 text-center">
                                            <PrimaryButton>
                                                <Link
                                                    href={route(
                                                        "team.athletes",
                                                        teamData.id
                                                    )}
                                                >
                                                    Manage Player
                                                </Link>
                                            </PrimaryButton>
                                        </td>
                                        <td className="px-2 py-3 border-2 text-center">
                                            <div className="inline-flex flex-col gap-2">
                                                <PrimaryButton>
                                                    <Link
                                                        href={route(
                                                            "team.edit",
                                                            teamData.id
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                </PrimaryButton>
                                                <DangerButton
                                                // onClick={(e) =>
                                                //     deleteTeam(teamData)
                                                // }
                                                >
                                                    Delete
                                                </DangerButton>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </main>
        </Authenticated>
    );
}
