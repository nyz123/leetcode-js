// 【题目】合并两个有序链表   
// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let p = l1,
    q = l2,
    res = new ListNode(),
    l = res;
  while (p && q) {
    while (p && q && p.val == q.val) {
      l.next = p;
      p = p.next;
      l = l.next;
      l.next = q;
      l = l.next;
      q = q.next;
    }
    while (p && q && p.val < q.val) {
      l.next = p;
      l = l.next;
      p = p.next;
    }
    while (p && q && p.val > q.val) {
      l.next = q;
      l = l.next;
      q = q.next;
    }
  }
  if (p) l.next = p;
  if (q) l.next = q;
  return res.next;
};

console.log(mergeTwoLists({ val: 1, next: null }, { val: 2, next: null }));
