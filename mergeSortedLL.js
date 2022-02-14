/* function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let l1 = new ListNode(1);
let a = l1;
l1.next = new ListNode(2);

let l2 = new ListNode(3);
let b = l2;
l2.next = new ListNode(4); */

// console.log(mergeTwoLists(a, b));
var mergeTwoLists = function (list1, list2) {
  let mergedList = new ListNode();
  let head = mergedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      mergedList.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      mergedList.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    mergedList = mergedList.next;
  }

  if (list1) {
    mergedList.next = list1;
  }
  if (list2) {
    mergedList.next = list2;
  }

  return head.next;
};
