/**
 * 划分字母区间
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，
同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
示例 1:
输入: S = "ababcbacadefegdehijhklij"
输出: [9,7,8]
解释:
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
注意:
S的长度在[1, 500]之间。
S只包含小写字母'a'到'z'。
链接：https://leetcode-cn.com/problems/partition-labels
 */

/**
 * @param {string} S
 * @return {number[]}
 */
function getCode(ch){
    return ch.charCodeAt()
}
var partitionLabels = function(S) {
  let last = [],res=[];// len=26
  for (let i = 0; i < S.length; i++) {
    last[getCode(S[i])-getCode('a')] = i;
  }
  let j = 0,anchor = 0;
  for (let i = 0; i < S.length; i++) {
      j = Math.max(j,last[getCode(S[i])-getCode('a')]);
      if(i == j){
          res.push(i-anchor+1);
          anchor = i+1
      }
  }
  return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
