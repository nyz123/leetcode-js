/**
 * 检查子树。你有两棵非常大的二叉树：T1，有几万个节点；T2，有几万个节点。设计一个算法，判断 T2 是否为 T1 的子树。
 * 如果 T1 有这么一个节点 n，其子树与 T2 一模一样，则 T2 为 T1 的子树，也就是说，从节点 n 处把树砍断，得到的树与 T2 完全相同。
 * 输入：t1 = [1, 2, 3], t2 = [2]
 * 输出：true
 * https://leetcode-cn.com/problems/check-subtree-lcci
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var checkSubTree = function (t1, t2) {
    return check(t1,t2,false)
};

function check(t1, t2, bl) {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    if (t1.val == t2.val) { bl = true; return check(t1.left, t2.left,bl) && check(t1.right , t2.right,bl) }
    else if(bl) return false;
    else return check(t1.left, t2) || check(t1.right, t2)
}

console.log(checkSubTree({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}, new TreeNode(2)));