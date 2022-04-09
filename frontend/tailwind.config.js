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
                'primary-gray': '#8E8E93',
                'blue-gray': '#F4F6FC',
                'grey': '#CCC',
                'dark-grey': "#555"
            },
            dropShadow: {
                "md": '0 5px 5px rgba(204, 204, 204, 0.75)',
            },
        },
        fontFamily: {
            'rock-salt': ['Rock Salt', 'cursive']
        },


    },
    plugins: [],
}