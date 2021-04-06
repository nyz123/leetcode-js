/**
 * 【题目】括号生成
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
例如，给出 n = 3，生成结果为：
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis1 = function(n) {
  if(n === 0) return ['']
  if(n === 1) return ['()']
  const result = []
  for(let p = 0; p < n; p++) {
      const q = n - 1 - p
      generateParenthesis(p).forEach(item => {
          generateParenthesis(q).forEach(model => {
              result.push(`(${item})${model}`)
          })
      })
  }
  return result
};

var generateParenthesis = function(n) {
  if (n === 0) return [""];
  if (n === 1) return ["()"];
  let res = [[""], ["()"]];
  for (let i = 2; i < n + 1; i++) {
    let l = [];
    for (let j = 0; j < i; j++) {
      let list1 = res[j],
        list2 = res[i - 1 - j];
      list1.map(item => {
        list2.map(item1=>{
          l.push(`(${item})${item1}`)
        })
      });
    }
    res.push(l)
  }
  return res[n];
};
console.log(generateParenthesis(3));
