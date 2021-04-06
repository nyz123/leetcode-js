/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function (N, K, r, c) {
    let dp = new Array(N).fill(new Array(N).fill(1)), dt = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]];
    for (let k = 1; k <= K; k++) {
        let t = new Array(N).fill(new Array(N).fill(0));
        console.log(t)
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                for (let z = 0; z < 8; z++) {
                    let d = dt[z]
                    let x = i + d[0];
                    let y = j + d[1];

                    if (x < 0 || x >= N || y < 0 || y >= N)
                        continue;
                    t[i][j] = t[i][j] + dp[x][y];
                }
            }
        }
        dp = t;
    }
    return dp[r][c] / Math.pow(8, K)
};
knightProbability(3, 2, 0, 0)