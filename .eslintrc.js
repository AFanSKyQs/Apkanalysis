module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/multi-word-component-names': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    indent: 'off',
    'no-param-reassign': 'off',
    'template-curly-spacing': 'off',
    'max-len': [
      'error',
      {
        code: 600
      }]
  }
  // extends: [
  //   'plugin:vue/essential',
  //   '@vue/standard',
  //   '@vue/typescript/recommended'
  // ]
}
