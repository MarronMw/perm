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

            colors: {
                brand: {
                    navy: "#1B2B48", // bg for nav and sidebar, primary buttons, headings
                    silver: "#C0C0C0", // Utility and dividers,icons(non-active),secondary actions
                    dark: "#111A2C", // For deeper shadows/hovers
                    light: "#E2E8F0", // For subtle backgrounds
                    white: "#FFFFFF", // App bg, Cards bg
                    warning: "#f97316", //warnings and alerts
                    success: "#15803d", //success messages and indicators
                    error: "#dc2626", //error messages and indicators
                },
            },
        },
    },

    plugins: [forms],
};
