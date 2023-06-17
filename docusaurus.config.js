// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bithubby Blog",
  tagline: "a bit story from your future hubby",
  favicon: "img/favicon.ico",
  url: "https://bithubby.com",
  baseUrl: "/",
  organizationName: "muhmmdfrd",
  projectName: "bithubby",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    {
      src: "/hotjar.js",
      async: true,
    },
    {
      src: "https://cdn.lr-ingest.com/LogRocket.min.js",
      async: true,
    },
    {
      src: "/logrocket.js",
      async: true,
    },
    // {
    //   src: "/stat.js",
    //   async: false,
    // },
  ],
  plugins: [
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: ["queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleTagManager: {
          containerId: "G-YSZ4SVHFBS",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 1.0,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      },
    ],
  ],
  themeConfig: {
    statCounter: {
      projectId: "12857747",
      securityCode: "a7909409",
    },
    announcementBar: {
      id: "announcement_bithubby",
      content:
        "Disarankan untuk menggunakan Chrome. Aku sempat coba di beberapa browser ada yang error (Mozilla, Opera, dan UC). Jangan lupa matikan adblock (gaada iklan kok, hanya ada script untuk mengirim notifikasi saja). Thanks",
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: true,
    },
    metadata: [
      { name: "keywords", content: "blog, story, article about life" },
    ],
    navbar: {
      title: "Bithubby",
      logo: {
        alt: "Bithubby Logo",
        src: "img/logo.svg",
      },
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Docusaurus logo",
        src: "img/logo.svg",
        href: "https://bithubby.com",
        width: 300,
        height: 100,
      },
      links: [
        {
          title: "Collaborate",
          items: [
            {
              label: "Github",
              href: "https://github.com/muhmmdfrd",
            },
            {
              html: `
                  <a href="https://github.com" target="_blank" rel="noreferrer noopener" aria-label="Stored at Github">
                    <img src="/img/github-white.png" alt="Github Logo" width="114" />
                  </a>
                `,
            },
          ],
        },
        {
          title: "Mini Blog",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/bithubby",
            },
            {
              html: `
                  <div style="margin-bottom: 8px"></div>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer noopener" aria-label="twitter">
                    <img src="/img/twitter-white.png" alt="Twitter Logo" width="44" />
                  </a>
                `,
            },
          ],
        },
        {
          title: "My Favorite Social Media",
          items: [
            {
              label: "Facebook",
              href: "https://web.facebook.com/muhmmdfrd",
            },
            {
              html: `
                  <div style="margin-bottom: 8px"></div>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer noopener" aria-label="fb">
                    <img src="/img/fb-white.png" alt="Facebook Logo" width="44" />
                  </a>
                `,
            },
          ],
        },
        {
          title: "Follow Me",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/muhmmdfrd_",
            },
            {
              html: `
                  <div style="margin-bottom: 8px"></div>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" aria-label="ig">
                    <img src="/img/ig-white.png" alt="Instagram Logo" width="44" />
                  </a>
                `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bithubby`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
