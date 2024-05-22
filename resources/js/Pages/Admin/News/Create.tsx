import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/button/secondary";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { NewsForm } from "@/types/formData";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { newsCategory } from "@/Utils/newsCategory";
import DropdownInput from "@/Components/dropdownInput";

const Create = ({ auth }: PageProps) => {
    const { data, setData, post, errors, reset } = useForm<NewsForm>({
        title: "",
        content: "",
        author: "",
        category: "Football",
        image_url: null,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("news.store"), {
            forceFormData: true,
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
                        <InputLabel htmlFor="content" value="Content" />
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
                    <SecondaryButton type="submit">Create</SecondaryButton>
                </form>
            </main>
        </Authenticated>
    );
};

export default Create;
