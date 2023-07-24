

const picker = new easepick.create({
    element: "#datepicker",
    css: [
        "../libs.js/@easepick/bundle/dist/index.css"
    ],
    zIndex: 10,
    grid: 2,
    calendars: 2,
    AmpPlugin: {
        dropdown: {
            months: true
        },
        darkMode: false
    },
    plugins: [
        "AmpPlugin",
        "RangePlugin"
    ],
    format: 'MMM DD',
})