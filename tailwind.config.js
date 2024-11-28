/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Include all your React files
    ],
    theme: {
        extend: {
            fontFamily: {
                pixel: ["DotGothic16", "sans-serif"],
                // title: ["Hammersmith One", "sans-serif"],
                // title: ["Press Start 2P", "sans-serif"],
                body: ["Parkinsans", "sans-serif"],
            },
            borderWidth: {
                3: "3px"
            }
        },
    },
    plugins: [],
}

