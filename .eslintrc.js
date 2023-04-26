require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@big-whale-labs/eslint-config-bwl'],
  parserOptions: { tsconfigRootDir: __dirname },
}
