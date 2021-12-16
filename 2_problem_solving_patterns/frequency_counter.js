/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding valuesquared int the second array.
 * The frequency of the value must be same.
 *
 * @example same([1,2,3], [4,1,9]) // true
 * @example same([1,2,3], [4,1]) // false
 * @example same([1,2,1], [4,4,1]) // false (must be same frequency)
 */

require("../helper").titleLog("Frequency Counter");

// * O(n2)
// arr1 * arr2 times loops
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// * O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of arr1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  for (let val of arr2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  // console.log(frequencyCounter1, frequencyCounter2);

  for (let key of arr1) {
    // Check if squared key is present
    if (!(frequencyCounter2[key ** 2] in frequencyCounter1)) return false;

    // Check if frequency value is present
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }

  return true;
}

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [4, 1]));
// console.log(same([1, 2, 1], [4, 4, 1]));

// console.log(same2([1, 2, 3, 2], [4, 1, 4, 9]));
// console.log(same2([1, 2, 3], [4, 1, 4]));
console.log(same2([1, 2, 1], [4, 4, 1]));
