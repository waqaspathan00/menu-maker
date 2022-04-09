module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-black': '#1C1C1E',
                'primary-red': '#FF3B30',
                'primary-blue': '#007AFF',
                'primary-gray': '#8E8E93'
            }
        },
        fontFamily: {
            'rock-salt': ['Rock Salt', 'cursive']
        }
    },
    plugins: [],
}