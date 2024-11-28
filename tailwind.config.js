/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {default: flattenColorPalette,} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Include all your React files
    ],
    theme: {
        extend: {
            fontFamily: {
                pixel: ["DotGothic16", "sans-serif"],
                body: ["DotGothic16", "sans-serif"],
                // title: ["Hammersmith One", "sans-serif"],
                // title: ["Press Start 2P", "sans-serif"],
                // body: ["Parkinsans", "sans-serif"],
            },
            borderWidth: {
                3: "3px"
            }
        },
    },
    plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({addBase, theme}) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

