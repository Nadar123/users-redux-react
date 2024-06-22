import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            boxShadow: {
                custom: '3px 0px 11px rgba(0, 0, 0, 0.4)',
                'dark-custom': '0 4px 6px -1px rgba(200, 200, 200, 0.1), 0 2px 4px -1px rgba(200, 200, 200, 0.06)', // Dark theme shadow
            },
        },
    },
    plugins: [],
});