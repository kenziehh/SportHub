import DangerButton from "@/Components/button/danger";
import PrimaryButton from "@/Components/button/primary";
import SecondaryButton from "@/Components/button/secondary";
import YoutubePlayer from "@/Components/youtube";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { HighlightResponse } from "@/types/responseData";
import { Link } from "@inertiajs/react";

export default function HighlightDashboard({ auth, highlight }: PageProps) {
    console.log(highlight);
    return (
        <Authenticated user={auth.user}>
            <main className="container">
                <section className="flex justify-between py-10 items-center">
                    <h2 className="text-4xl">Match Highlight</h2>
                    <SecondaryButton>
                        <Link href={route("match.create")} className="">
                            Create
                        </Link>
                    </SecondaryButton>
                </section>
                <section className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-center px-2 py-3 border-2">
                                    Highlight Id
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Title
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Video
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Description
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {highlight.data.map(
                                (highlightData: HighlightResponse) => {
                                    return (
                                        <tr key={highlightData.id}>
                                            <td className="px-2 py-3 border-2 max-w-sm md:text-justify">
                                                {highlightData.id}
                                            </td>
                                            <td className="px-2 py-3 border-2 max-w-6xl text-justify">
                                                {highlightData.title}
                                            </td>
                                            <td className="px-2 py-3 border-2">
                                                <YoutubePlayer
                                                    width="400"
                                                    height="300"
                                                    videoId={
                                                        highlightData.video_url.startsWith(
                                                            "https://www.youtube.com/watch?v="
                                                        )
                                                            ? highlightData.video_url.split(
                                                                  "="
                                                              )[1]
                                                            : ""
                                                    }
                                                />
                                            </td>
                                            {/* <td className="px-2 py-3 border-2">
                                    {highlightData.video_url.startsWith(
                                        "https://www.youtube.com/watch?v="
                                    )
                                        ? highlightData.video_url.split("=")[1]
                                        : ""}
                                </td> */}
                                            <td className="px-2 py-3 border-2 max-w-sm md:text-justify">
                                                {highlightData.description}
                                            </td>

                                            <td className="px-2 py-3 border-2 text-justify">
                                                <div className="inline-flex flex-col gap-2">
                                                    <PrimaryButton>
                                                        Edit
                                                    </PrimaryButton>
                                                    <DangerButton
                                                    // onClick={(e) =>
                                                    //     deleteMatch(matchData)
                                                    // }
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
            </main>
        </Authenticated>
    );
}
