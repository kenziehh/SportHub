import DropdownInput from "@/Components/input/dropdown";
import InputError from "@/Components/input/error";
import InputLabel from "@/Components/input/label";
import SecondaryButton from "@/Components/button/secondary";
import TextInput from "@/Components/input";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { TeamForm } from "@/types/formData";
import { newsCategory } from "@/Utils/newsCategory";
import { router, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = ({ auth }: PageProps) => {
    const { data, setData, post, errors } = useForm<TeamForm>({
        name: "",
        team_logo: null,
        country: "",
        sport_category: "",
        station: "",
    });
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(data);
        e.preventDefault();
        post(route("team.store"), {
            forceFormData: true,
        });
    };
    return (
        <Authenticated user={auth.user}>
            <main className="container">
                <form onSubmit={onSubmit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
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
                        <InputLabel htmlFor="country" value="Country" />
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
                    <div>
                        <InputLabel htmlFor="station" value="Station" />
                        <TextInput
                            id="station"
                            className="mt-1 block w-full"
                            value={data.station}
                            onChange={(e) => setData("station", e.target.value)}
                            required
                            autoComplete="station"
                        />
                        <InputError message={errors.country} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="team_logo" value="Team Image" />
                        <TextInput
                            id="team_logo"
                            type="file"
                            name="image"
                            className="mt-1 block w-full"
                            onChange={(e) => {
                                const file = e.target.files
                                    ? e.target.files[0]
                                    : null;
                                setData("team_logo", file);
                            }}
                        />
                        <InputError
                            message={errors.team_logo}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel
                            htmlFor="sport_category"
                            value="Sport Category"
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
