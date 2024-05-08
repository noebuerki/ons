/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // flowbite-svelte
                primary: {
                    50: '#F8F2FF',
                    100: '#F4EEFF',
                    200: '#E6DEFF',
                    300: '#D7CCFF',
                    400: '#C3ADFF',
                    500: '#7D5CFF',
                    600: '#572FFF',
                    700: '#4F27EB',
                    800: '#4522CC',
                    900: '#371BA5'
                }
            }
        }
    },
    plugins: [require('flowbite/plugin')]
};

module.exports = config;