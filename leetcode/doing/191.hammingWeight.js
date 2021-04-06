var hammingWeight = function(n) {
    let a = (n.toString(2)).split(''),count = 0;
    a.forEach(i=>{
        if(i=='1') count++
    })

    return count
};

