/** 【题目】最小路径和
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
说明：每次只能向下或者向右移动一步。
示例:
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-path-sum
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid.length == 0) return 0;
  let m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j == 0) continue;
      else if (i === 0) grid[0][j] += grid[0][j - 1];
      else if (j === 0) grid[i][0] += grid[i - 1][0];
      else grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
    }
  }
  return grid[m - 1][n - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
);
console.log(minPathSum([[0]]));
