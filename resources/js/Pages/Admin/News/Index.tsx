import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { NewsResponse } from "@/types/responseData";
import { Link, router } from "@inertiajs/react";

const NewsDashboard = ({ auth, news }: PageProps) => {
    console.log(news);
    const deleteNews = (news: NewsResponse) => {
        router.delete(route("news.destroy", { news: news.id }));
    };
    return (
        <Authenticated user={auth.user}>
            <main className="container">
                <section className="flex justify-between py-10 items-center">
                    <h2 className="text-4xl">News</h2>
                    <SecondaryButton>
                        <Link href={route("news.create")} className="">
                            Create
                        </Link>
                    </SecondaryButton>
                </section>
                <section className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-center px-2 py-3 border-2">
                                    Title
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Content
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Image
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Category
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Author
                                </th>
                                <th className="text-center px-2 py-3 border-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.data.map((newsData: NewsResponse) => {
                                return (
                                    <tr key={newsData.id}>
                                        <td className="px-2 py-3 border-2 max-w-sm md:text-justify">
                                            {newsData.title}
                                        </td>
                                        <td className="px-2 py-3 border-2 max-w-6xl text-justify">
                                            {newsData.content}
                                        </td>
                                        <td className="px-2 py-3 border-2">
                                            <img
                                                src={
                                                    newsData.image_url
                                                        ? newsData.image_url.startsWith(
                                                              "news_images"
                                                          )
                                                            ? `/storage/${newsData.image_url}`
                                                            : newsData.image_url
                                                        : ""
                                                }
                                                alt="no picture"
                                                className="max-w-48 max-h-48 md:max-w-96 md:max-h-96"
                                            />
                                        </td>
                                        <td className="px-2 py-3 border-2 text-justify">
                                            {newsData.category}
                                        </td>
                                        <td className="px-2 py-3 border-2 text-justify">
                                            {newsData.author}
                                        </td>
                                        <td className="px-2 py-3 border-2 text-justify">
                                            <div className="inline-flex flex-col gap-2">
                                                <PrimaryButton>
                                                    <Link
                                                        href={route(
                                                            "news.edit",
                                                            newsData.id
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                </PrimaryButton>
                                                <DangerButton
                                                    onClick={(e) =>
                                                        deleteNews(newsData)
                                                    }
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
                <Pagination links={news.meta.links} />
            </main>
        </Authenticated>
    );
};

export default NewsDashboard;
