/**

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
请你实现这个将字符串进行指定行数变换的函数：
string convert(string s, int numRows);

示例 1:
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
示例 2:
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:
L     D     R
E   O E   I I
E C   I H   N
T     S     G

**/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 效率差
var convert = function(s, numRows) {
    let len = s.length,count = 2*numRows-2,
        cycle = Math.floor(len/count),
        remainder = len%count,
        icycle=remainder<=numRows?(cycle+1):(cycle+2),
        result='';
        if(numRows===1) return s
      for (let j = 0; j < numRows; j++) {
        for(let i = 0,t=0;i<=icycle;i++,t=count*i){
            console.log(i,cycle)
            let temp = t+j;
            if(j!==0&&j!==numRows-1&&i!==0&&(t-j)<len)  result+=s[t-j],console.log(t+j);
            (t+j)<len && (result+=s[t+j])
         }          
      }
      return result
  };

//效率好
    
// Source : https://leetcode.com/problems/zigzag-conversion/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var ans, max_column;

function dfs(x, y, s, n, numRows) {
  ans[x][y] = s[n];

  if (s.length === n) {
    max_column = y;
    return;
  }

  if (y % (numRows - 1) === 0 && x !== numRows - 1) 
    dfs(x + 1, y, s, n + 1, numRows);
  else 
    dfs(x - 1, y + 1, s, n + 1, numRows);
}

var convert = function(s, numRows) {
  if (numRows === 1) 
    return s;

  ans = [];

  for (var i = 0; i < numRows; i++)
    ans[i] = [];

  dfs(0, 0, s, 0, numRows);

  var tmp = '';
  for (var i = 0; i < numRows; i++)
    for (var j = 0; j <= max_column; j++)
      if (ans[i][j] !== undefined)
        tmp += ans[i][j];

  return tmp;
};
// my
var convert = function(s, numRows) {
    let len = s.length,count = 2*numRows-2,
        cycle = Math.floor(len/count),
        remainder = len%count,
        icycle=remainder<=numRows?(cycle+1):(cycle+2),
        result='';
        if(numRows===1) return s
      for (let j = 0; j < numRows; j++) {
        for(let i = 0,t=0;i<=icycle;i++,t=count*i){
            console.log(i,cycle)
            let temp = t+j;
            if(j!==0&&j!==numRows-1&&i!==0&&(t-j)<len)  result+=s[t-j],console.log(t+j);
            (t+j)<len && (result+=s[t+j])
         }          
      }
      return result
  };

console.log(convert("abcde",4))
