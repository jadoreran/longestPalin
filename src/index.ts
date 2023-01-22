// splited up for unit testing
// implemented with stack like style.
// isPalindrome signature has a default startLength in its own function
// return result conditions is inspired by JS match() to be easier to predict behaviour.
// match() will return an array if found multiple result with the same length, else will return null.

import { findLongestPalindromes } from "./palindrome";

(() => {
  for (const iterator of ["babad", "aba", "cbbc", "bb"]) {
    if (findLongestPalindromes(iterator)) {
      console.log(
        `${iterator} has ${findLongestPalindromes(
          iterator
        )} as a longest palindrome`
      );
    } else {
      console.log(`${iterator} does not has any palindrome`);
    }
  }
})();
