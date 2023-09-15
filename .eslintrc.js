module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    './.eslintrc-auto-import.json'
  ],
  // ESLint 使用@typescript-eslint/parser您安装的包来解析源文件。
  parser: '@typescript-eslint/parser',
  root: true,
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  //解析器选项
  parserOptions: {
    //最新语法版本ES
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {}
}
