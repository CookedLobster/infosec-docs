const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Infosec-Docs",
  tagline: "Infosec Documentations",
  url: "https://infosec-docs.pages.dev/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  organizationName: "Infosec Docs",
  projectName: "infosec-Docs",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "Infosec Docs",
          content:
            "tryhackme, exploitation guides, exploiting, enumeration, hackthebox, pentesting, docs, vulnerabilities, privilege escalation, infosec, infosec docs, pentesting docs, pentesting guide, hacking, priv esc, payloads, windows privilege escalation, reverse shell, web shell, terminal stabilization, shell stabilization, interactive tty, stabilize reverse shell",
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },

      algolia: {
        appId: "GY56D1Z7YZ",
        apiKey: "2e6e95d3603dd2b44504e0027ff207ba",
        indexName: "infosec-pages",
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      blog: false,
      navbar: {
        title: "Infosec-Docs",
        logo: {
          alt: "InfosecDocs",
          src: "img/LightMode.svg",
          srcDark: "img/DarkMode.svg",
        },
        hideOnScroll: true,
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "owaspDocs",
            label: "Docs",
          },
          {
            type: 'docSidebar', 
            position: 'left',
            sidebarId: 'acDocs',     
            label: 'Active Directory',   
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "linuxDocs",
            label: "Vulnerable Boxes",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "php",
          "log",
          "batch",
          "powershell",
          "groovy",
          "perl",
          "vim",
        ],
      },
    }),
};


module.exports = config;
