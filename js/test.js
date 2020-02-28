// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists

// var mergeTwoLists = function(l1, l2) {
//   let res = [],
//     len1 = l1.length,
//     len2 = l2.length,
//     i = 0,
//     j = 0;
//   while (i < len1 && j < len2) {
//     while (i < len1 && l1[i] < l2[j]) {
//       res.push(l1[i]);
//       i++;
//     }
//     while (i < len1 && j < len2 && l1[i] == l2[j]) {
//       res.push(l1[i], l1[i]);
//       i++;
//       j++;
//     }
//     while (j < len2 && l1[i] > l2[j]) {
//       res.push(l2[j]);
//       j++;
//     }
//   }
//   return res;
// };
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

console.log(
  JSON.stringify(
    mergeTwoLists(
      {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 4,
            next: null
          }
        }
      },
      {
        val: 1,
        next: {
          val: 3,
          next: { val: 4, next: null }
        }
      }
    )
  )
);
