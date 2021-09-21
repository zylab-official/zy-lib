module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    '@storybook/addon-actions',
    '@storybook/addon-links',
    // '@storybook/addon-notes/register',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    // https://github.com/UX-and-I/storybook-design-token/issues/44
    // 'storybook-design-token',
    '@geometricpanda/storybook-addon-badges',
    'storybook-addon-xd-designs/register'
  ]
}