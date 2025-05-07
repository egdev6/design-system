import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: 'Univia',
  fontCode: 'monospace',

  // Branding
  brandTitle: 'Egdev Storybook',
  brandUrl: 'https://github.com/egdev6',
  brandImage: '/images/logo.svg',

  // Colors
  colorPrimary: '#d61e2b',
  colorSecondary: '#d61e2b',

  // Toolbar
  barSelectedColor: '#FFFFFF',
  barHoverColor: '#d61e2b'
});
