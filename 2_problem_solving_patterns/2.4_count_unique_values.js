/**
 * Implement a function countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the aray.
 * There can be negative numbers in the array, but it will always be sorted.
 *
 * @example countUniqueValues([1,1,1,1,1,1,2]) // 2
 * @example countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * @example countUniqueValues([]) // 0
 * @example countUniqueValues([-2,-1-1,0,1]) // 4
 */

function countUniqueValues(arr) {
  if (arr.length == 0) return 0;
  console.log(arr);

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    console.log(i, j);
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

let arr = [];
arr = [1, 1, 1, 1, 1, 1, 2];
arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
// arr = [];
// arr = [-2, -1, -1, 0, 1];

console.log("Result:", countUniqueValues(arr));
