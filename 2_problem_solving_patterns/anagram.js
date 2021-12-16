/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another,
 * such as cinema, formed from iceman.
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  console.log("Input:", { str1, str2 });

  const lookup = {};
  for (const char of str1) {
    lookup[char] = lookup[char] ? lookup[char] + 1 : 1;
  }
  console.log(lookup);

  for (const char of str2) {
    if (!lookup[char]) return false;
    else lookup[char] -= 1;
  }

  return true;
}

// console.log(validAnagram("anagram", "mgarana"));
// console.log(validAnagram("anagram", "mgaraaa"));
console.log(validAnagram("iceman", "cinema"));
