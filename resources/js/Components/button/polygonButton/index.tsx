import { Link } from "@inertiajs/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PolygonButton = ({
    className,
    linkTo = "",
}: {
    className: string;
    linkTo?: string;
}) => {
    return (
        <Link href={linkTo}>
            <button
                style={{
                    clipPath:
                        "polygon(0% 0%, 75% 0%, 75% 50%, 50% 100%, 0% 100%)",
                }}
                className={`bg-lightBlack text-white pl-16 pr-32 py-6 text-center justify-center items-center rounded-3xl ${className}`}
            >
                <FaArrowRight className="text-white" />
            </button>
        </Link>
    );
};

export default PolygonButton;
