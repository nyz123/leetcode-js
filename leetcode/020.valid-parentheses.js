// 【题目】有效的括号 
// 判断字符串括号是否闭合
var isValid = function(str) {
  let arr1 = str.split("");
  let arr2 = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  for (let index = 0; index < arr1.length; index++) {
    const item = arr1[index];
    if (map[item]) arr2.push(item);
    else if (arr2.length>0 && map[arr2[arr2.length - 1]] == item) arr2.pop();
    else return false;
  }
  return arr2.length == 0;
}

console.log(parenthesis("()"));
console.log(parenthesis("([[}}]])"));
console.log(parenthesis("(){[(])"));
console.log(parenthesis("(){}[{}]"));
