/**
 * 顺时针打印矩阵
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
示例 1：
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
限制：
0 <= matrix.length <= 100
0 <= matrix[i].length <= 100
注意：本题与主站 54 题相同：https://leetcode-cn.com/problems/spiral-matrix/
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) return [];
  let res = [],
    m = matrix.length,
    n = matrix[0].length,
    total = m * n;
  let l = 0,
    t = 0,
    r = n - 1,
    b = m - 1;
  while (res.length < total) {
    for (let j = l; j <= r; j++) {
      res.push(matrix[t][j]);
    }
    for (let i = t + 1; i <= b; i++) {
      res.push(matrix[i][r]);
    }
    if (b !== t) {
      for (let j = r - 1; j >= l; j--) {
        res.push(matrix[b][j]);
      }
    }
    if (l !== r) {
      for (let i = b - 1; i > t; i--) {
        res.push(matrix[i][l]);
      }
    }
    t++;
    r--;
    b--;
    l++;
  }
  return res;
};
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
);
