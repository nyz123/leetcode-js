/**基本计算器
 * 实现一个基本的计算器来计算一个简单的字符串表达式的值。
字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。

示例 1:
输入: "1 + 1"
输出: 2
示例 2:
输入: " 2-1 + 2 "
输出: 3
示例 3:
输入: "(1+(4+5+2)-3)+(6+8)"
输出: 23
说明：
你可以假设所给定的表达式都是有效的。
请不要使用内置的库函数 eval。
链接：https://leetcode-cn.com/problems/basic-calculator
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let len = s.length,
    res = 0,
    num = 0,
    sign = 1, //1：+；-1：-
    arr = [];
  for (let i = 0; i < len; i++) {
    let item = s[i];
    if (item == " ") continue;
    else if (!isNaN(parseInt(item, 10))) {
      num = num * 10 + parseInt(item, 10);
    } else if (item == "+") {
      res += sign * num;
      sign = 1;
      num = 0;
    } else if (item == "-") {
      res += sign * num;
      sign = -1;
      num = 0;
    } else if (item == "(") {
      arr.push(res);
      arr.push(sign);
      res = 0;
      sign = 1;
      num = 0;
    } else if (item == ")") {
      res += sign * num;
      res = res * arr.pop() + arr.pop();
      sign = 1;
      num = 0;
    } else return res;
  }
  return res+num*sign;
};

console.log(calculate("2147483647"));
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
