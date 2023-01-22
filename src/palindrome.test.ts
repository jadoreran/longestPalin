import { findLongestPalindromes } from "./palindrome";

test("babad has two palindromes with equal length bab and aba", () => {
  const expected = ["bab", "aba"];
  expect(findLongestPalindromes("babad")).toEqual(
    expect.arrayContaining(expected)
  );
});

test("abcbaccccc has two palindromes with equal length abcba and abcba", () => {
  const expected = ["abcba", "abcba"];
  expect(findLongestPalindromes("abcbaccccc")).toEqual(
    expect.arrayContaining(expected)
  );
});

test("abcba has bcb as a longest palindrome", () => {
  expect(findLongestPalindromes("bcb")).toBe("bcb");
});

test("aba has aba as a longest palindrome", () => {
  expect(findLongestPalindromes("aba")).toBe("aba");
});

test("cbbc has cbbc as a longest palindrome", () => {
  expect(findLongestPalindromes("cbbc")).toBe("cbbc");
});

test("bb has bb as a longest palindrome", () => {
  expect(findLongestPalindromes("bb")).toBe("bb");
});

test("aaaa has aaaa as a longest palindrome", () => {
  expect(findLongestPalindromes("aaaa")).toBe("aaaa");
});

test("axba does not has any palindrome", () => {
  expect(findLongestPalindromes("axba")).toBeNull();
});

test("a is not a palindrome", () => {
  expect(findLongestPalindromes("a")).toBeNull();
});
