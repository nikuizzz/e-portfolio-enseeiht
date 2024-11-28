/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Include all your React files
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ["Hammersmith One", "sans-serif"],
                // body: ["Parkinsans", "sans-serif"],
                // body: ["Press Start 2P", "sans-serif"],
                body: ["DotGothic16", "sans-serif"],
            },
            borderWidth: {
                3: "3px"
            }
        },
    },
    plugins: [],
}

