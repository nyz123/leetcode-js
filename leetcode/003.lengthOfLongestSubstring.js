/**
 *  【题目】无重复字符的最长子串：
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

var lengthOfLongestSubstring = function(s) {
    if(s === null || s.length === 0){
        return 0;
    }
    
    var map = {};
    var len = 0;
    var maxLen = len;
    var start = 0;

    // scan from left to right.    
    for(var i = start; i < s.length; i++){
        c = s[i];

        if(map[c] !== undefined && map[c] >= start) {
            start = map[c] + 1; // start new search with repeated word's last location + 1
            len = i - start; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
        }
        
        len++; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
        
        if(len > maxLen){
            maxLen = len;
        }
        
        map[c] = i;
    }
    
    return maxLen;
};

console.log(lengthOfLongestSubstring('abcdeda1234567d'))
// Runtime: 112 ms, faster than 63.75% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 39.8 MB, less than 70.10% of JavaScript online submissions for Longest Substring Without Repeating Characters.