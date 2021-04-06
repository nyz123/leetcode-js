/**
 * 二叉树的层次遍历
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
例如:
给定二叉树: [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：
[
  [3],
  [9,20],
  [15,7]
]
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let arr = [],
    res = [];
  arr.push(root);
  let temp,
    item = [],
    tempRes = [];
  while (arr.length !== 0) {
    tempRes = [];
    temp = arr.shift();
    item.push(temp.val);
    if (temp.left) tempRes.push(temp.left);
    if (temp.right) tempRes.push(temp.right);
    while (arr.length !== 0) {
      temp = arr.shift();
      item.push(temp.val);
      if (temp.left) tempRes.push(temp.left);
      if (temp.right) tempRes.push(temp.right);
    }
    res.push(item);
    item = [];
    arr = tempRes;
  }
  return res;
};

console.log(
  levelOrder({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null }
    }
  })
);
