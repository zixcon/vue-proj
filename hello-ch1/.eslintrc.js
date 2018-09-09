module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    // 使用iView时报"Parsing error: x-invalid-end-tag"错误
    // iView将标签渲染为原生html标签时，由于这些标签是自闭合的，所以有end标签会报错。
    // "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
