module.exports = {
  stories: [
    '../src/Components/**/*.stories.mdx',
    '../src/Components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-styled-component-theme/dist/preset',
    '@storybook/addon-jest',
  ],
};
