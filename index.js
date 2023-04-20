//Function description:
// Find the length of the longest substring without repeating characters in the given string `s`.
//sample function:

function longestSubstringLength(s) {
  let maxLength = 0;
  let charSet = new Set();
  let i = 0;
  let j = 0;
  while (i < s.length && j < s.length) {
    if (!charSet.has(s[j])) {
      charSet.add(s[j++]);
      maxLength = Math.max(maxLength, j - i);
    } else {
      charSet.delete(s[i++]);
    }
  }
  return maxLength;
}
