import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Philosoduck',
  tagline: 'Ducks 🦆 !',
  favicon: 'img/duck.png',
  blog: false,

  future: {
    v4: true,
  },

  url: 'https://fictionalduck.github.io',
  baseUrl: '/philosoduck/',

  organizationName: 'FictionalDuck',
  projectName: 'philosoduck',
  trailingSlash: false,
  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/FictionalDuck/philosoduck/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
      sidebar: {
        hideable: true,
      }},
      image: 'img/duck-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Philosoduck',
        logo: {
          alt: 'Duck Logo 🦆',
          src: 'img/duck.png',
        },
        items: [
          {
            to: 'docs', label: 'Files', position: 'left'
          },
          {
            href: 'https://github.com/fictionalduck/philosoduck',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
