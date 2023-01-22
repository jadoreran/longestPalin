"use strict";

export const findLongestPalindromes = (text: string) => {
  const palindromes = [""];

  for (let i = 0; i < text.length; i++) {
    for (let j = text.length - 1; j > 0; j--) {
      const str = text.slice(i, j + 1);
      if (isPalindrome(str)) {
        if (palindromes[0].length < str.length) {
          palindromes.pop();
          palindromes.push(str);
        } else if (palindromes[0].length === str.length) {
          palindromes.push(str);
        }
      }
    }
  }

  if (palindromes.length > 1) {
    return palindromes;
  } else if (palindromes[0] !== "") {
    return palindromes[0];
  }
  return null;
};

export const isPalindrome = (letters: string, startLength = 0): boolean => {
  if (startLength === 0) {
    startLength = letters.length;
  }
  if (startLength <= 1) {
    return false;
  }
  if (startLength > 1 && (letters.length === 1 || letters.length === 0)) {
    return true;
  }
  if (letters[0] === letters[letters.length - 1]) {
    return isPalindrome(letters.slice(1, -1), startLength);
  }
  return false;
};
