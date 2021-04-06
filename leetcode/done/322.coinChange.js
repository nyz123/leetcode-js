/**
 * 零钱兑换
给定不同面额的硬币 coins 和一个总金额 amount。
编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
如果没有任何一种硬币组合能组成总金额，返回 -1。
示例 1:
输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1
示例 2:
输入: coins = [2], amount = 3
输出: -1
说明:
你可以认为每种硬币的数量是无限的。
 */
var minCount = function(coins, amount, count) {
  if (amount < 0) return -1;
  if (amount == 0) return 0;
  if (count[amount - 1] !== undefined && count[amount - 1] != 0)
    return count[amount - 1];
  let min = Infinity;
  for (let i = 0; i < coins.length; i++) {
    let res = minCount(coins, amount - coins[i], count);
    if (res >= 0 && res < min) {
      min = res + 1;
    }
  }
  count[amount - 1] = min == Infinity ? -1 : min;
  return count[amount - 1];
};
var coinChange1 = function(coins, amount) {
  if (amount < 0) return -1;
  let arr = [];
  arr.length = amount;
  return minCount(coins, amount, arr);
};

var coinChange = function(coins, amount) {
  if (coins.length == 0) return -1;
  let arr = []; //凑成数字i需要的个数
  arr.length = amount+1;
  arr[0] = 0
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0 && arr[i - coins[j]] < min) {
        min = arr[i - coins[j]]+1;
      }
    }
    arr[i] = min;
  }
  return arr[amount] == Infinity ? -1 : arr[amount];
};
console.log(coinChange([1, 2, 5], 11));
