function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(1);
let root = head;

head.next = new ListNode(2, new ListNode(3));

var reverseList = function (head) {
  // base case
  if (head == null || head.next == null) {
    return head;
  }
  // go all the way to the end
  /* 
    head = {val:2, next:3}
    reverseList({val:3, next: null}) => {val:3, next: null}
*/
  console.log(head);
  let reversedListHead = reverseList(head.next);
  console.log(head);
  // add reverse myself
  head.next.next = head;
  head.next = null;
  // go up
  return reversedListHead;
};

console.log(reverseList(root));
