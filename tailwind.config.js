import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                // Default body font
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                // Brand and heading font
                brand: ["Urbanist", ...defaultTheme.fontFamily.sans],
            },
            // Since Urbanist looks great when bold
            fontWeight: {
                tight: "800",
            },
        },
    },

    plugins: [forms],
};
