import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { NewsForm } from "@/types/formData";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ auth, newsData }: PageProps) => {
    const { data, setData, patch, errors } = useForm<NewsForm>({
        title: newsData.data.title||"",
        content: newsData.data.content||"",
        author: newsData.data.author||"",
        image_url: null, // Initially null to handle File object
        release_date: newsData.data.release_date
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create FormData object
        // const formData = new FormData();
        // formData.append("title", data.title);
        // formData.append("content", data.content);
        // formData.append("author", data.author);
        // if (data.image_url) {
        //     formData.append("image_url", data.image_url); // Append file if exists
        // }
        // formData.append("release_date", data.release_date);

        if (newsData.data.id) {
            patch(route("news.update", newsData.data.id), {
                forceFormData: true, // Ensures form data is sent properly
                onSuccess: (page) => {
                    console.log("Update successful", page);
                },
                onError: (errors) => {
                    console.error("Update failed", errors);
                },
            });
        } else {
            console.error("newsData.id is undefined");
        }
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
                        </div>
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