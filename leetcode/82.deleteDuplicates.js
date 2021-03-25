var deleteDuplicates = function (head) {
    if (head.length == 0) return []
    let res = new ListNode(), q = res, last = [head.val, 1], p = head.next;
    while (p) {
        let item = p.val
        if (last[0] == item) { last[1]++ }
        else if (last[1] == 1) {
            q.next = new ListNode(last[0])
            q = q.next
            last[0] = item
        } else {
            last[0] = item
            last[1] = 1
        }
        p = p.next
    }
    if (last[1] == 1) {
        res.next = new ListNode(last[0])
    }
    return res.next
};