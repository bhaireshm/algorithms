const helper = require("../helper");

/**
 * Write a function called maxSubArraySum which accepts as array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 *
 * @example maxSubArraySum([1,2,5,2,8,1,5],2) // 10
 * @example maxSubArraySum([1,2,5,2,8,1,5],4) // 17
 * @example maxSubArraySum([4,2,1,6],1) // 6
 * @example maxSubArraySum([],4) // false
 */

function maxSubArraySum(arr, n) {
  console.log("Input:", { arr, n });

  const refactor = false;
  if (n > arr.length) return false;

  let max = 0;
  if (!refactor) {
    console.log();
    helper.timeComplexity("n2", "Naive method");

    for (let i = 0; i < arr.length - n + 1; i++) {
      let temp = 0;
      for (let j = 0; j < n; j++) temp += arr[i + j];
      if (temp > max) max = temp;
    }
  } else {
    helper.timeComplexity("n", "Refactor method");
    max = 0;

    for (let i = 0; i < n; i++) {
      max += arr[i];
    }
    let temp = max;
    for (let i = n; i < arr.length; i++) {
      temp = temp - arr[i - n] + arr[i];
      max = Math.max(temp, max);
    }
  }

  return max;
}

let n = 1;
let arr = [];
arr = [1, 2, 5, 2, 8, 1, 5];
arr = [4, 2, 1, 6];
arr = [];

console.log("Result:", maxSubArraySum(arr, n));
