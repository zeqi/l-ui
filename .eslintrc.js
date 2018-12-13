module.exports = {

  root: true,
  parser: 'babel-eslint',
  parserOptions: {
      sourceType: 'module',
      ecmaVersion: 6,
      ecmaFeatures: {
          "experimentalObjectRestSpread": true
      }
  },
  env: {
      browser: true
  },
  extends: [
      "standard"
  ],
  plugins: [
      'vue'
  ],
  //"off"或者0    关闭规则关闭
  //"warn"或者1    在打开的规则作为警告（不影响退出代码）
  //"error"或者2    把规则作为一个错误（退出代码触发时为1）
  'rules': {
      "indent": 0, //禁止缩进
      'space-before-function-paren': 0,
      "semi": [1, "always"], //分号结尾
      "no-unused-vars": 0,
      "eol-last": 0,
      "spaced-comment": 0, //注释风格要不要有空格什么的,
      "comma-dangle": 0, //对象字面量项尾不能有逗号
      "no-multiple-empty-lines": [1, { "max": 2 }], //空行最多不能超过2行
      "padded-blocks": 0, //块语句内行首行尾是否要空行
      "comma-spacing": 0, //逗号前后的空格
      "no-undef": 0,
      "no-useless-return": 0,
      "no-unused-expressions": 0, //禁止无用的表达式
      "no-throw-literal": 0, //禁止抛出字面量错误 throw "error";
      "camelcase": 0, //强制驼峰法命名
      "space-before-blocks": [0, "always"], //不以新行开始的块{前面要不要有空格
      "standard/object-curly-even-spacing": 0,
      "space-infix-ops": 0, //中缀操作符周围要不要有空格
      "no-trailing-spaces": 0, //一行结束后面不要有空格
      "arrow-spacing": 0, //=>的前/后括号
      "no-const-assign": 2, //禁止修改const声明的变量
      "no-dupe-args": 2, //函数参数不能重复
      "key-spacing": 0, //对象字面量中冒号的前后空格
      "keyword-spacing": 0,
      "brace-style": 0, //大括号风格
      "no-useless-constructor": 0,
      "no-return-assign": 0,
      "no-use-before-define": 0,
      'no-return-await': 0,
      "semi-spacing": 0,
      "no-mixed-operators":0,
      "no-useless-computed-key":0,
      "operator-linebreak":0,
      "no-useless-escape":0,
      "one-var":0,
      "no-multi-spaces":0,
      'space-in-parens':0
  }
}

