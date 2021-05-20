// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var rangeSumBST = function (root, low, high) {
    if(!root) return 0
    let res = 0, val = root.val;
    if (val < low) {
        return rangeSumBST(root.right, low, high)
    } else if (val > high) {
        return rangeSumBST(root.left, low, high)
    } else {
        return val + rangeSumBST(root.left,low,high) + rangeSumBST(root.right,low,high)
    }
};
