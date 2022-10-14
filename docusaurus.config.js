const lightCodeTheme = require('prism-react-renderer/themes/github');   // Code Block Theme
const darkCodeTheme = require('prism-react-renderer/themes/dracula');   // Code Block Theme


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infosec-Docs',
  tagline: 'Infosec Documentations',
  url: 'https://infosec-docs.pages.dev/',   // Website URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hd-favicon.png',       // Favicon Support


  // Github Pages
  organizationName: 'Infosec Docs', // Organization Name
  projectName: 'infosec-Docs',      // GitHub Repository Name
  trailingSlash: false,

  // Site Locales
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'Infosec Docs', content: 'tryhackme, exploitation guides, exploiting, enumeration, hackthebox, pentesting, docs, vulnerabilities, privilege escalation, infosec, infosec docs, pentesting docs, pentesting guide, hacking, priv esc, payloads, windows privilege escalation, reverse shell, web shell, terminal stabilisation, shell stabilisation, interactive tty, stabilize reverse shell'}],
      colorMode: {
        respectPrefersColorScheme: true,    // Respect User System Theme [Light - Dark]
      },

      algolia: {
        // The application ID provided by Algolia
        appId: '4TU62FN1Z3',

        // Public API key [Safe to be Commited to GitHub]
        apiKey: '7bb751ebb1bf0b407dc8e169c2422850',
        indexName: 'dev_DocsPersonal',
        contextualSearch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true, 
        },
      },
      blog: false,
      navbar: {
        title: 'Infosec-Docs',
        logo: {
          
          alt: 'InfosecDocs',
          src: 'img/test.svg',
          srcDark: 'img/test.svg',
        },
        hideOnScroll: true,   // Hide Navbar on Scroll
        items: [
          {
            href: 'https://github.com/CookedLobster/infosec-docs',
            position: 'right',
            className: 'header-github-link',    // Use Icon as GitHub
            'aria-label': 'GitHub Repository',
          },
          {
            type: 'docSidebar',  
            position: 'left',
            sidebarId: 'owaspDocs',             // [sidebar.js] ID
            label: 'General Pentesting',        // Navbar Title
          },
          {
            type: 'docSidebar', 
            position: 'left',
            sidebarId: 'linuxDocs',     // [sidebar.js] ID
            label: 'TryHackMe Rooms',   // Navbar Title
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'log', 'lua', 'batch', 'http', 'powershell', 'groovy', 'perl'],    // Code Block Supported Languages
      },
    }),
};

module.exports = config;
