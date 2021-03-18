var numDistinct = function (s, t) {
    if (s.length == 0 || t.length == 0) return 0
    let arr_s = s.split(''), arr_t = t.split('');
    let n = arr_s.length + 1, m = arr_t.length + 1
    let arr = new Array(m);
    console.log(m,n);
    for (let i = 0; i < m; i++) {
        arr[i] = new Array(n)
    }
    for (let i = 0; i < n; i++) {
        arr[0][i] = 1;
    }
    for (let i = 1; i < m; i++) {
        arr[i][0] = 0;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = (arr_t[i - 1] == arr_s[j - 1]) ? (arr[i - 1][j - 1] + arr[i][j - 1]) : arr[i][j - 1]
        }
    }
    console.log(arr);
    return arr[m- 1][n- 1]
};
console.log(numDistinct("babgbag", "bag"));