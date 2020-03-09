module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "indent": [
          "error",
          2
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-unused-vars": [2, { 
        // 允许声明未使用变量
        "vars": "local",
        // 参数不检查
        "args": "none" 
      }],
  }
};