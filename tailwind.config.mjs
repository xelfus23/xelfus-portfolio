/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./public/**/*.{png,jpg,jpeg,gif}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                xl: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            },
            textShadow: {
                xl: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            },
        },
        colors: {
            black: "#1a1b1d",
            blue: "#3618bd",
            darkBlue: "#21256f",
            royalBlue: "#3618bd",
            lightBlue: "#0092d9",
            orange: "#f18a39",
            purple: "#8679fe",
            violet: "#5556e3",
            white: "#eff6ff",
            ice: "#bbcbd7",
            yellow: "#fffc80",
            transparent: "00FFFFFF",
        },
    },
    plugins: [],
};
