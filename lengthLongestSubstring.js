function lengthOfLongestSubstring(s) {
  const set = new Set();
  let maxLength = 0,
    count = 0;
  for (let i = 0; i < s.length; ++i) {
    while (set.has(s[i])) {
      set.delete(s[count]);
      count++;
    }
    set.add(s[i]);
    maxLength = Math.max(maxLength, i - count + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
