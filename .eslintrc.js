module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "dot-notation": "off", // Object 不強制用 "."
    "no-console": "off", // can console.log
    "prettier/prettier": [
      "error",
      {
        semi: true, // 使用分號,
        singleQuote: false, // 使用雙引號
        arrowParens: "avoid", // fn = x => x 去除框框
        trailingComma: "none" // 結尾逗號
      }
    ]
  }
};
