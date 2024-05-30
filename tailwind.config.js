import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            animation: {
                marquee: "marquee 10s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            container: {
                center: true,
                // padding: {
                //     DEFAULT: "2rem",
                //     sm: "2rem",
                //     lg: "5rem",
                //     xl: "5rem",
                //     "2xl": "6rem",
                // },
                padding: "1.5rem",
            },

            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                redLabel: "#FF1F57",
                lightBlack: "#353333",
                grey: "#A7A7A7",
                darkGrey: "#463E42",
            },
        },
    },

    plugins: [forms],
};
