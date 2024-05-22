import DropdownInput from "@/Components/input/dropdown";
import InputError from "@/Components/input/error";
import InputLabel from "@/Components/input/label";
import SecondaryButton from "@/Components/button/secondary";
import TextInput from "@/Components/input";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { NewsForm } from "@/types/formData";
import { newsCategory } from "@/Utils/newsCategory";
import { router, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ auth, newsData }: PageProps) => {
    const { data, setData, post, errors } = useForm<NewsForm>({
        title: newsData.data.title || "",
        content: newsData.data.content || "",
        author: newsData.data.author || "",
        category: newsData.data.category,
        image_url: null, // Initially null to handle File object
        // release_date: newsData.data.release_date,
    });
    console.log(newsData);
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.post(route("news.update", newsData.data.id), {
            _method: "patch",
            ...data,
        });
    };

    return (
        <Authenticated user={auth.user}>
            <main className="container">
                {newsData ? (
                    <form onSubmit={onSubmit}>
                        <div>
                            <InputLabel htmlFor="title" value="Title" />
                            <TextInput
                                id="title"
                                name="title"
                                className="mt-1 block w-full"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                required
                                isFocused
                                autoComplete="title"
                            />
                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="author" value="Author" />
                            <TextInput
                                id="author"
                                name="author"
                                className="mt-1 block w-full"
                                value={data.author}
                                onChange={(e) =>
                                    setData("author", e.target.value)
                                }
                                required
                                autoComplete="author"
                            />
                            <InputError
                                message={errors.author}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="content" value="Content" />
                            <textarea
                                id="content"
                                name="content"
                                className="mt-1 block w-full h-48 resize-vertical"
                                value={data.content}
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                                required
                                autoComplete="content"
                            />
                            <InputError
                                message={errors.content}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="image_url"
                                value="Project Image"
                            />
                            <TextInput
                                id="image_url"
                                type="file"
                                name="image_url"
                                className="mt-1 block w-full"
                                onChange={(e) => {
                                    const file = e.target.files
                                        ? e.target.files[0]
                                        : null;
                                    setData("image_url", file);
                                }}
                            />
                            <InputError
                                message={errors.image_url}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="category" value="Category" />
                            <DropdownInput
                                options={newsCategory}
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                                value={data.category} // Bind the value to data.category
                                required
                            />
                            <InputError
                                message={errors.category}
                                className="mt-2"
                            />
                        </div>
                        {/* <div>
                            <InputLabel
                                htmlFor="release_date"
                                value="Release Date"
                            />
                            <TextInput
                                id="release_date"
                                name="release_date"
                                type="date"
                                className=""
                                value={data.release_date}
                                onChange={(e) =>
                                    setData("release_date", e.target.value)
                                }
                                required
                                autoComplete="release_date"
                            />
                            <InputError
                                message={errors.release_date}
                                className="mt-2"
                            />
                        </div> */}
                        <SecondaryButton type="submit">Edit</SecondaryButton>
                    </form>
                ) : (
                    <div>loading</div>
                )}
            </main>
        </Authenticated>
    );
};

export default Edit;
