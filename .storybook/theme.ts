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
  colorPrimary: '#b41520',
  colorSecondary: '#b41520',

  // UI
  appBg: '#0e0e10',
  appContentBg: '#0e0e10',
  appBorderColor: '#24252f',
  appBorderRadius: 4,
  textColor: '#FFFFFF',
  textInverseColor: '#FFFFFF',

  // Toolbar
  barBg: '#15161b',
  barTextColor: '#FFFFFF',
  barSelectedColor: '#b41520',
  barHoverColor: '#b41520',

  // Button
  buttonBg: '#0e0e10',
  buttonBorder: '#b41520'
});
