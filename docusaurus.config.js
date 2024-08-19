const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Haltdos Docs',
  tagline: 'User Guide',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
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
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          versions:{
            'current': {
              label: 'v8'
            },
            '7.0': {
              label: 'v7',
              path: 'v7',
              banner: 'none',
              badge: true
            },
            '6.0': {
              label: 'v6',
              path: 'v6',
              badge: true
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
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo/icon_light.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      algolia: {
        appId: '1ZIELJEF8N',
        apiKey: 'a7af1e25b6dd3029f65b497136ac7a9d',
        indexName: 'haltdos',
        contextualSearch: true,
        searchPagePath: 'search',
        insights: true
      },
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
        title: '',
        logo: {
          alt: 'Haltdos',
          src: 'img/logo/dark_doc_logo.png',
          srcDark: 'img/logo/light_doc_logo.png'
        },
        items: [
          {to: 'community', label: 'Community', position: 'left'},
          {to: 'professional', label: 'Professional', position: 'left'},
          {to: 'enterprise', label: 'Enterprise', position: 'left'},
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
              {to: 'kb', label: 'Knowledge Base'},
              {to: 'glossary', label: 'Glossary'},
              {href: 'https://www.haltdos.com/blogs',label: 'Blogs', target: '_blank', rel: null}
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
