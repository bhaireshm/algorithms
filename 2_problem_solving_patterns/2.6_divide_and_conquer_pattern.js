const helper = require("../helper");

/**
 * Given a sorted array of integers, write a function called search, that accepts a value
 * and returs the index where the value passed to the function is located.
 * If the value is not found, return -1.
 *
 * @example search([1,2,3,4,5,6], 4) // 3
 * @example search([1,2,3,4,5,6], 5) // 4
 * @example search([1,2,3,4,5,6], 3) // 2
 */

function search(arr = [], val) {
  console.log("Input:", { arr, val }, "\n");
  if (arr.length <= 0) return false;
  helper.timeComplexity("logn");

  let min = 0;
  let max = arr.length - 1;
  let loopCount = 0;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log("middle", arr[middle]);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      console.log("loopCount", loopCount, "\n");
      return middle;
    }
    loopCount++;
  }
  return -1;
}

let n = 26;
let arr = [];
arr = [1, 2, 3, 4, 5, 6, 7];
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 17, 19, 20, 21, 24, 26, 27, 28, 29, 30, 31, 32];

console.log("Result:", search(arr, n));
