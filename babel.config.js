const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

const plugins = [];

if (IS_PROD) {
  plugins.push('transform-remove-console');
}
plugins.push([
  'import',
  {
    'libraryName': 'view-design',
    'libraryDirectory': 'src/components'
  }
]);

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
};
