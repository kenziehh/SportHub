import { SVGAttributes } from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            width="43"
            height="44"
            viewBox="0 0 43 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M42.5 15.1H28.1V0.799988H14.3C14.3 8.69999 7.9 15.1 0 15.1V28.9H14.3V43.2H28.1C28.1 35.3 34.6 28.9 42.5 28.9V15.1Z"
                fill="#201B21"
            />
        </svg>
    );
}
