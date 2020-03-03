/**
 * 反转一个单链表。
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
链接：https://leetcode-cn.com/problems/reverse-linked-list
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList1 = function(head) {
  if (!head || !head.next) return head;
  let p = head,
    q = p.next,
    res = null;
  while (p && q) {
    p.next = res;
    res = p;
    p = q;
    q = p.next;
  }
  p.next = res;
  return p;
};

console.log(
  JSON.stringify(
    reverseList1({
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
      }
    })
  )
);
