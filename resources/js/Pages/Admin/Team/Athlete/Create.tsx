import InputError from "@/Components/input/error";
import InputLabel from "@/Components/input/label";
import SecondaryButton from "@/Components/button/secondary";
import TextInput from "@/Components/input";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { AthleteForm } from "@/types/formData";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { newsCategory } from "@/Utils/newsCategory";
import DropdownInput from "@/Components/input/dropdown";

const Create = ({ auth, teamData }: PageProps) => {
    console.log(teamData);
    const { data, setData, post, errors, reset, transform } =
        useForm<AthleteForm>({
            name: "",
            image_url: null,
            team_id: teamData.data.id,
            country: "",
            sport_category: "",
        });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("athlete.store", teamData.data.id), {
            forceFormData: true,
        });
    };

    return (
        <Authenticated user={auth.user}>
            <main className="container">
                <form onSubmit={onSubmit}>
                    <div>
                        <InputLabel htmlFor="name" value="name" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="country" value="country" />
                        <TextInput
                            id="country"
                            className="mt-1 block w-full"
                            value={data.country}
                            onChange={(e) => setData("country", e.target.value)}
                            required
                            autoComplete="country"
                        />
                        <InputError message={errors.country} className="mt-2" />
                    </div>
                    {/* <div>
                        <InputLabel htmlFor="content" value="Content" />
                        <TextInput
                            id="country"
                            className="mt-1 block w-full"
                            value={data.country}
                            onChange={(e) => setData("country", e.target.value)}
                            required
                            autoComplete="country"
                        />
                        <InputError message={errors.content} className="mt-2" />
                    </div>
                    <div> */}
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
                        <InputLabel
                            htmlFor="sport_category"
                            value="sport_category"
                        />
                        <DropdownInput
                            options={newsCategory}
                            onChange={(e) =>
                                setData("sport_category", e.target.value)
                            }
                            value={data.sport_category} // Bind the value to data.sport_category
                            required
                        />
                        <InputError
                            message={errors.sport_category}
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
