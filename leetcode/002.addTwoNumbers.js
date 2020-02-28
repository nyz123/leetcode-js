/**
 * 两数相加：
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，
 * 并且它们的每个节点只能存储 一位 数字。如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
var addTwoNumbers = function(l1, l2) {
   let carry = 0,p=l1,q=l2,result = new ListNode(0),list = result;
   while(p||q){
       let sum;
       if(!p){
           sum = q.val;
       }else if(!q){
           sum = p.val
       }else{
           sum = p.val+q.val;
       }
       if(carry===1){
           sum++;
       }
       if(sum>=10){
           carry = 1;
           sum = sum%10
       }else{
           carry = 0;
       }
       list.next = new ListNode(sum);
       list= list.next;
       p&&(p = p.next)
       q&&(q = q.next)
   }
    if(carry){
        list.next = new ListNode(1);
    }
   return result.next
};

// 执行用时 : 172 ms, 在Add Two Numbers的JavaScript提交中击败了65.50% 的用户
// 内存消耗 : 38.6 MB, 在Add Two Numbers的JavaScript提交中击败了0.86% 的用户