/** * 
 * 螺旋矩阵II
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 */

var generateMatrix = function (n) {
    let matrix = [], len = n * n;
    matrix.length = n;
    for (let i = 0; i < matrix.length; i++) {
       matrix[i] = new Array(n).fill(null)
    }
    let layer = 0, count = 1;
    while (count <= len) {
        //top
        for (let i = layer; i < n - layer; i++) {
            matrix[layer][i] = count++;
        }
        //right
        for (let i = layer + 1; i < n - 1 - layer; i++) {
            matrix[i][n - 1 - layer] = count++;
        }
        if (n - 1 - layer > layer) {
            //bottom
            for (let i = n - 1 - layer; i >= layer; i--) {
                matrix[n - 1 - layer][i] = count++;
            }
            if (n - 1 - layer > layer) {
                //left
                for (let i = n - 2 - layer; i > layer; i--) {
                    matrix[i][layer] = count++
                }
            }
        }
        layer++
    }
    return matrix
};

console.log(generateMatrix(3));