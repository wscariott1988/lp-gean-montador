/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#f2800d",
                "primary-dark": "#c26000",
                "navy": "#0f172a",
                "navy-light": "#1e293b",
                "background-light": "#f8f7f5",
                "background-dark": "#0f172a",
                "text-main": "#181411",
                "text-muted": "#64748b",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "sans": ["Manrope", "sans-serif"],
            },
        },
    },
    plugins: [],
}