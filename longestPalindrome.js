/* var longestPalindrome = function (s) {
  for (let j = s.length - 1; j >= 0; j--) {
    let i = 0,
      k = j;
    while (k < s.length) {
      let substr = s.substring(i, k + 1);
      if (isPalindrome(substr)) return substr;
      i++, k++;
    }
  }
  return "";
};

function isPalindrome(str) {
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++, r--;
  }
  return true;
} */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const a = new ListNode(1, new ListNode(2, null));
console.log(a);
