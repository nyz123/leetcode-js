/**
 * 
 */
var pathWithObstacles = function (obstacleGrid) {
    let res = [], i = 0, j = 0, m = obstacleGrid.length, n;
    if (m == 0 || m >= 1 && (obstacleGrid[0][0] || obstacleGrid[m - 1][obstacleGrid[0].length - 1])) {
        return []
    } else if (m == 1) {
        return [[0, 0]];
    } else {
        n = obstacleGrid[0].length
        res.push([i, j])
        while (res.length > 0 && i < m && j < n) {
            let num = obstacleGrid[i][j];
            if (num !== 0) {
                obstacleGrid[i][j] = 2
                res.pop()
                i = res[res.length - 1][0]
                j = res[res.length - 1][1] + 1
            } else {
                i !== 0 && j !== 0 && res.push([i, j])
                i == n - 1 ? j++ : i++
            }
        }
        console.log(obstacleGrid);
        return res
    }
};

console.log(pathWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));