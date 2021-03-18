/** * 
 * 螺旋矩阵
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

var spiralOrder = function (matrix) {
    let res = [], m = matrix.length, n = matrix[0].length, len = m * n;
    let layer = 0;
    while (res.length < len) {
        //top
        for (let i = layer; i <= n - 1 - layer; i++) {
            res.push(matrix[layer][i])
        }
        //right
        for (let i = layer + 1; i < m - 1 - layer; i++) {
            res.push(matrix[i][n - 1 - layer])
        }
        if (m - 1 - layer > layer) {
            //bottom
            for (let i = n - 1 - layer; i >= layer; i--) {
                res.push(matrix[m - 1 - layer][i])
            }
            if (n - 1 - layer > layer) {
                //left
                for (let i = m - 2 - layer; i > layer; i--) {
                    res.push(matrix[i][layer])
                }
            }
        }
        layer++
    }
    return res
};

console.log(spiralOrder([[7], [9], [6]]));