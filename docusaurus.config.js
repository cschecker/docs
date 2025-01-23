// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "CloudSecurity Checker 사용가이드",
    favicon: "img/favicon.ico",
    url: "https://cschecker.github.io",
    baseUrl: "/",
    projectName: "cschecker.github.io", // Usually your repo name.
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    i18n: {
        defaultLocale: "ko",
        locales: ["ko", "en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/scss/_custom.scss"),
                },
            }),
        ],
    ],
    plugins: [
        "docusaurus-plugin-sass",
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "faq",
                path: "faq",
                routeBasePath: "faq",
                sidebarPath: require.resolve("./sidebars.js"),
            },
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "",
                logo: {
                    alt: "로고",
                    src: "img/mainLogo.png",
                    srcDark: "img/mainLogoDark.png",
                },
                items: [
                    {
                        to: "/docs/login/",
                        position: "left",
                        label: "Docs",
                        activeBaseRegex: `/docs/login/`,
                    },
                    {
                        type: "localeDropdown",
                        position: "right",
                    },
                    // {
                    //     to: "/faq/profile/signup",
                    //     position: "left",
                    //     label: "FAQ",
                    //     activeBaseRegex: `/faq/`,
                    // },
                    // { to: "/blog", label: "Notice", position: "left" },
                ],
            },
            footer: {},
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
