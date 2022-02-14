/* // Uderstanding
// ~97% faster
const checkIsomorphism = (s, t) => {
  const map = new Map();
  for (let i = s.length - 1; i > -1; --i) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      map.set(s[i], t[i]);
    }
  }
  return true;
};

var isIsomorphic = function (s, t) {
  const map = new Map();
  for (let i = s.length - 1; i > -1; --i) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false;
    } else {
      map.set(s[i], t[i]);
    }
  }
  return true;
};
console.log(checkIsomorphism("egg", "add"));
console.log(checkIsomorphism("add", "egg"));
// console.log(isIsomorphic("egg", "add"));
// console.log(checkIsomorphism("foo", "bar"));

// console.log(isIsomorphic("badc", "baba"));
// console.log(isIsomorphic("baba", "badc"));

console.log(isIsomorphic("paper", "title"));
// console.log(checkIsomorphism("title", "paper"));
 */

/* 
var isIsomorphic = function (s, t) {
  let obj = {};
  let mappedCharArr = {};
  let expected = [];
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; ++i) {
    if (obj[s[i]]) {
      obj[s[i]] += 1;
    } else {
      if (Object.values(mappedCharArr).includes(t[i])) {
        return false;
      } else {
        obj[s[i]] = 1;
        mappedCharArr[s[i]] = t[i];
      }
    }
  }
  for (let i = 0; i < s.length; ++i) {
    expected.push(mappedCharArr[s[i]]);
  }
  if (expected.join("") == t) {
    return true;
  } else {
    return false;
  }
}; 
*/
var isIsomorphic = function (s, t) {
  let sMap = {};
  let tMap = {};

  for (let i = s.length - 1; i > -1; --i) {
    let sChar = s[i];
    let tChar = t[i];

    if (!sMap[sChar]) {
      sMap[sChar] = tChar;
    }
    if (!tMap[tChar]) {
      tMap[tChar] = sChar;
    }

    if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
      return false;
    }
  }

  return true;
};
