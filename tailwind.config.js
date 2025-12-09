/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                corporate: {
                    blue: '#0f172a', // slate-900
                    accent: '#1e293b', // slate-800
                    light: '#f1f5f9', // slate-100
                }
            },
            fontSize: {
                'xxs': '0.65rem',
            }
        },
    },
    plugins: [],
}
