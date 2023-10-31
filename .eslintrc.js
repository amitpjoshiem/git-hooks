module.exports = {
  parserOptions: {
    ecmaVersion: 14,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  //overwriting below rule with existing rules
  rules: {
    //        semi: ["error", "never"],
    //"means semi colun should no be use"
    //"always", //"means semi colun should no be use"
  },
}
