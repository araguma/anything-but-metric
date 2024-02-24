/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: ['src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                press: {
                    1: 'var(--press-1)',
                    2: 'var(--press-2)',
                    3: 'var(--press-3)',
                    4: 'var(--press-4)',
                    5: 'var(--press-5)',
                    6: 'var(--press-6)',
                    7: 'var(--press-7)',
                    8: 'var(--press-8)',
                    9: 'var(--press-9)',
                },
            },
        },
    },
    plugins: [],
}
