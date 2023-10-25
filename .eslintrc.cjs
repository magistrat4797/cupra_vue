module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "prettier",
    "@vue/eslint-config-typescript",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
  },
};
