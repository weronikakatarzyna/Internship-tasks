//importujemy funkcję do testowania
const { longestSubstringLength } = require("./index");

describe("longestSubstringLength(s)", () => {
  it('should return 3 for string "abcabcbb"', () => {
    const result = longestSubstringLength("abcabcbb");
    expect(result).toEqual(3);
  });

  it('should return 1 for string "bbbbb"', () => {
    const result = longestSubstringLength("bbbbb");
    expect(result).toEqual(1);
  });

  it('should return 3 for string "pwwkew"', () => {
    const result = longestSubstringLength("pwwkew");
    expect(result).toEqual(3);
  });

  it("should return 0 for empty string", () => {
    const result = longestSubstringLength("");
    expect(result).toEqual(0);
  });
});
