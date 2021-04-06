/**
 * 腐烂的橘子
在给定的网格中，每个单元格可以有以下三个值之一：
值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。
每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。
返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。
示例 1：
输入：[[2,1,1],[1,1,0],[0,1,1]]
输出：4
示例 2：
输入：[[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
示例 3：
输入：[[0,2]]
输出：0
解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
提示：
1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] 仅为 0、1 或 2
 */
function isHasGood(grid) {
  let m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) return true;
    }
  }
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting1 = function(grid) {
  if (grid.length == 0) return 0;
  let time = 0,
    m = grid.length,
    n = grid[0].length,
    count = 0;
  do {
    count = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] == 2) {
          j - 1 >= 0 && grid[i][j - 1] == 1 && ((grid[i][j - 1] = 3), count++); //左
          j + 1 < n && grid[i][j + 1] == 1 && ((grid[i][j + 1] = 3), count++); //右
          i - 1 >= 0 && grid[i - 1][j] == 1 && ((grid[i - 1][j] = 3), count++); //上
          i + 1 < m && grid[i + 1][j] == 1 && ((grid[i + 1][j] = 3), count++); //下
        }
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] == 3) {
          grid[i][j] = 2;
        }
      }
    }
    time++;
  } while (isHasGood(grid) && count !== 0);
  // isHas(grid)&&count!==0
  return isHasGood(grid) ? -1 : count == 0 ? time - 1 : time;
};

function Pos(i, j, m) {
  this.i = i;
  this.j = j;
  this.m = m;
}
var orangesRotting = function(grid) {
  let m = grid.length,
    n = grid[0].length,
    arr = [],
    time = 0;
  var map = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) arr.push(new Pos(i, j, time));
    }
  }
  while (arr.length !== 0) {
    let item = arr.shift();
    time =item.m;
    for (let i = 0; i < 4; i++) {
      let newI = item.i + map[i][0];
      let newJ = item.j + map[i][1];
      if (
        newI >= 0 &&
        newI < m &&
        newJ >= 0 &&
        newJ < n &&
        grid[newI][newJ] == 1
      ) {
        grid[newI][newJ] = 2;
        arr.push(new Pos(newI,newJ,time+1))
      }
    }
  }
  return isHasGood(grid)?-1:time
};
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));
