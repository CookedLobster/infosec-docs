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
  favicon: 'img/favicon.ico',       // Favicon Support


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
      colorMode: {
        respectPrefersColorScheme: true,    // Respect User System Theme [Light - Dark]
      },

      algolia: {
        // The application ID provided by Algolia
        appId: '4TU62FN1Z3',

        // Public API key [Safe to be Commited to GitHub]
        apiKey: '314fcff94802e7955d2064d12d5e2094',
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
