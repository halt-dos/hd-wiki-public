const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Haltdos Docs',
  tagline: 'User Guide',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo/icon_light.ico',
  url: 'https://docs.haltdos.com',
  baseUrl: '/',
  organizationName: 'haltdos',
  projectName: 'haltdos-wiki',
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
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
          lastVersion: 'current',
          versions:{
            current: {
              label: 'v7'
            },
            '6.0': {
              label: 'v6',
              banner: 'none',
              path: 'v6'
            }
          },
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
          breadcrumbs: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs:{
        sidebar:{
          hideable: true,
          autoCollapseCategories: true
        }
      },
      navbar: {
        title: 'Haltdos',
        logo: {
          alt: 'Haltdos',
          src: 'img/logo/icon_light.png',
          srcDark: 'img/logo/icon_dark.png'
        },
        items: [
          {to: 'enterprise', label: 'Enterprise', position: 'left'},
          {to: 'community', label: 'Community', position: 'left'},
          {to: 'cloud', label: 'Cloud', position: 'left'},
          {href: 'https://haltdos.com',label: 'Haltdos', target: '_blank', rel: null, position: 'right', className:'haltdos'},
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'dropdown',
            label: 'More',
            position: 'left',
            className: 'custom',
            items: [
              {to: 'api', label: 'API'},
              {to: 'kb', label: 'Knowledge Base'},
              {to: 'glossary', label: 'Glossary'},
              {href: 'https://haltdos.com/blogs',label: 'Blogs', target: '_blank', rel: null}
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;