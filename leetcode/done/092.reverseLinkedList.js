/**
 * 反转链表 II
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
说明:
1 ≤ m ≤ n ≤ 链表长度。
示例:
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseBetween = function(head, m, n) {
  if (!head || !head.next||m>=n) return head;
  
  let p = { next: head },
    q = p.next,
    isFound = false,
    isEnd = false,
    pos = 0,
    list = { next: null };
  while (p && q && !isEnd) {
    pos++;
    if (isFound) {
      p.next = q.next;
      q.next = list.next;
      list.next = q;
      q = p.next;
      pos == n && (isEnd = true);
    } else {
      list = p;
      p = q;
      q = q.next;
      pos == m && (isFound = true);
    }
  }
  return list.val?head:list.next;
};

console.log(
  JSON.stringify(
    reverseBetween(
      {
        val: 1,
        next: {
          val: 2,
          next: {val:3,next:{val:4,next:{val:5,next:null}}}
        }
      },
      2,
      4
    )
  )
);
