const solhintConfig = require('./solhint.config')

module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  overrides: [
    {
      // https://www.npmjs.com/package/prettier-plugin-solidity
      files: '*.sol',
      options: {
        printWidth: solhintConfig.rules['max-line-length'][1],
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
      },
    },
  ],
}
