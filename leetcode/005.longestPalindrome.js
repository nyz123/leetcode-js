/**
 * 【题目】最长回文子串
 */
var longestPalindrome = function(s) {
    if(s === null || s.length === 0){
        return "";
    }     
    var result = "";
    var len = s.length;
    var left, right; 
    for(var i = 0; i < len; i++){
        left = right = i;
        var str1 = expandFromCenterAndCheckForPalindrome(s,left,right);
        if(str1.length > result.length){
            result = str1;
        }
        var str2 = expandFromCenterAndCheckForPalindrome(s,left,right + 1);
        if(str2.length > result.length){
            result = str2;
        }
    }
    return result;
};

var expandFromCenterAndCheckForPalindrome = function(s, left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    return s.substring(left+1, right);
}