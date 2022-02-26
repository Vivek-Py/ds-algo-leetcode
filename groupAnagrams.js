// Understanding the anagram logic
/* var groupAnagrams = function (strs) {
  let collection = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    collection[letters]
      ? collection[letters].push(str)
      : (collection[letters] = [str]);
  }
  // aet // ant
  // [[eat, tea, ate], [tan, nat], [bat]]
  return Object.values(collection);
};
 */

// Use map instead of object
/* var groupAnagrams = function (strs) {
    let m = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
        else m.set(sorted, [str]);
    }
    return Array.from(m.values());
};
*/

// Using char code
/* var groupAnagrams = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
}; */

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
