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
  plugins: [
    "@jsplumb/docusaurus-plugin-statcounter",
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
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "standalone"],
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
          containerId: "G-YSZ4SVHFBS1",
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
    announcementBar: {
      id: "announcement_upgrade",
      content:
        "Bithubby mengucapkan <i>Taqabbalallahu Minna Wa Minkum Shiyamana Wa Shiyamakum</i>, Selamat Hari Raya Idul Fitri 1 Syawal 1444 Hijriyah✨",
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: true,
    },
    statCounter: {
      projectId: "128577471",
      securityCode: "a79094091",
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
          title: "Collaborate with me at:",
          items: [
            {
              label: "Github",
              href: "https://github.com/muhmmdfrd",
            },
            {
              html: `
                  <a href="https://github.com" target="_blank" rel="noreferrer noopener" aria-label="Stored at Github">
                    <img src="img/github-white.png" alt="Github Logo" width="128" />
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
                    <img src="img/twitter-white.png" alt="Twitter Logo" width="44" />
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
                    <img src="img/fb-white.png" alt="Facebook Logo" width="44" />
                  </a>
                `,
            },
          ],
        },
        {
          title: "We can follow each other at:",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/muhmmdfrd_",
            },
            {
              html: `
                  <div style="margin-bottom: 8px"></div>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" aria-label="ig">
                    <img src="img/ig-white.png" alt="Instagram Logo" width="44" />
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
