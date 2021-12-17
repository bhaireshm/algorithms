/**
 * Write a function called sun=mZero which accepts a sorted aaray of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 *
 * @example sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * @example sumZero([-2,0,1,3]) // undefined
 * @example sumZero([1,2,3]) // undefined
 */

function sumZero(arr) {
  console.log(arr);

  const naiveMethod = false;
  if (naiveMethod) {
    // O(n*2)
    console.log("Naive method\n");

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
        if (arr[i] + arr[j] == 0) return [arr[i], arr[j]];
      }
    }
  } else {
    // O(n)
    console.log("Refactor method\n");

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      console.log({ left, right });
      let sum = arr[left] + arr[right];

      if (sum == 0) return [arr[left], arr[right]];
      else if (sum > 0) right--;
      else left++;
    }
  }

  return false;
}

let arr = [];
// arr = [-3, -2, -1, 0, 1, 2];
// arr = [-2, 0, 1, 3];
// arr = [1, 2, 3];
arr = [-12, -10, -7, -4, -1, 0, 2, 3, 5, 8];

console.log("\nResult:", sumZero(arr));
