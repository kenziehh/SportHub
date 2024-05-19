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
            container: {
                center: true,
                padding: {
                    DEFAULT: "2rem",
                    sm: "2rem",
                    lg: "5rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                red: "#FF1F57",
                lightBlack: "#353333",
            },
        },
    },

    plugins: [forms],
};
