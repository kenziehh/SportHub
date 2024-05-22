import InputError from "@/Components/input/error";
import InputLabel from "@/Components/input/label";
import SecondaryButton from "@/Components/button/secondary";
import TextInput from "@/Components/input";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { NewsForm } from "@/types/formData";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = ({ auth }: PageProps) => {
    const { data, setData, post, errors, reset } = useForm<NewsForm>({
        title: "",
        content: "",
        author: "",
        image_url: null, // Change to null to handle File object
        release_date: "",
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("news.store"), {
            forceFormData: true, // Ensures form data is sent properly
        });
    };

    return (
        <Authenticated user={auth.user}>
            <main className="container">
                <form onSubmit={onSubmit}>
                    <div>
                        <InputLabel htmlFor="title" value="Title" />
                        <TextInput
                            id="title"
                            className="mt-1 block w-full"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            required
                            isFocused
                            autoComplete="title"
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="author" value="Author" />
                        <TextInput
                            id="author"
                            className="mt-1 block w-full"
                            value={data.author}
                            onChange={(e) => setData("author", e.target.value)}
                            required
                            autoComplete="author"
                        />
                        <InputError message={errors.author} className="mt-2" />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            className="mt-1 block w-full h-48 resize-vertical"
                            value={data.content}
                            onChange={(e) => setData("content", e.target.value)}
                            required
                            autoComplete="content"
                        />
                        <InputError message={errors.content} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="image_url" value="Project Image" />
                        <TextInput
                            id="image_url"
                            type="file"
                            name="image"
                            className="mt-1 block w-full"
                            onChange={(e) => {
                                const file = e.target.files
                                    ? e.target.files[0]
                                    : null;
                                setData("image_url", file); // Set the File object directly
                            }}
                        />
                        <InputError
                            message={errors.image_url}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="release_date">Release Date</label>
                        <TextInput
                            id="release_date"
                            className=""
                            value={data.release_date}
                            onChange={(e) =>
                                setData("release_date", e.target.value)
                            }
                            type="date"
                            required
                            autoComplete="release_date"
                        />
                        <InputError
                            message={errors.release_date}
                            className="mt-2"
                        />
                    </div>
                    <SecondaryButton type="submit">Create</SecondaryButton>
                </form>
            </main>
        </Authenticated>
    );
};

export default Create;
