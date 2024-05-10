import Pagination from "@/Components/pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { NewsResponse } from "@/types/responseData";
import React from "react";

const NewsDashboard = ({ auth, news }: PageProps) => {
    console.log(news);
    return (
        <Authenticated user={auth.user}>
            <main className="container">
                <table>
                    <th className="text-center px-2 py-3 border-2">Title</th>
                    <th className="text-center px-2 py-3 border-2">Content</th>
                    <th className="text-center px-2 py-3 border-2 hidden md:block">Image</th>
                    <th className="text-center px-2 py-3 border-2">Author</th>
                    {news.data.map((newsData: NewsResponse) => {
                        return (
                            <tr>
                                <td className="px-2 py-3 border-2">
                                    {newsData.title}
                                </td>
                                <td className="px-2 py-3 border-2">
                                    {newsData.content}
                                </td>
                                <td className="px-2 py-3 border-2 hidden md:block">
                                    <img src={newsData.image_url} alt="" />
                                </td>
                                <td className="px-2 py-3 border-2">
                                    {newsData.author}
                                </td>
                            </tr>
                        );
                    })}
                </table>
                <Pagination links={news.meta.links} />
            </main>
        </Authenticated>
    );
};

export default NewsDashboard;
