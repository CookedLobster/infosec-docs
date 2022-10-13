// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infosec-Docs',
  tagline: 'Infosec Documentations',
  url: 'https://infosec-docs.pages.dev/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Github Pages
  organizationName: 'Infosec Docs', // GitHub org/user name
  projectName: 'infosec-Docs',   // Repo name
  trailingSlash: false,

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
        hideOnScroll: true,
        //style: 'primary',   // [NAVBAR] Color Defined from CSS
        items: [
          //{to: '/blog', label: 'Blog', position: 'left'},
          /*{
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'General',
          },
          */
          {
            type: 'docSidebar',  
            position: 'left',
            sidebarId: 'owaspDocs',     // [sidebar.js] ID
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
        additionalLanguages: ['php', 'log', 'lua', 'batch', 'http', 'powershell', 'groovy', 'perl'],
      },
            
    }),
};



module.exports = config;
