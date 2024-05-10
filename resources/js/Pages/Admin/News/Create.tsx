import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import React, { FormEvent } from "react";

const Create = ({ auth }: PageProps) => {
    const { data, setData, post, errors, reset } = useForm({
        title: "",
        content: "",
        author: "",
        image_url: "",
        release_date: "",
    });
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("news.store"));
    };
    return <div></div>;
};

export default Create;
