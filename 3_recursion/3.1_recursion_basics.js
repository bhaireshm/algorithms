/**
 * Basic functions using recursion
 */

// Count value
function countDown(num) {
  if (num <= 0) {
    console.log("All done!", "\n");
    return;
  }
  console.log(num);
  countDown(--num);
}

function sumRange(num) {
  console.log({ num });
  if (num == 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num) {
  console.log({ num });
  //   if (num == 1) return 1;
  //   return num * factorial(num - 1);
  return num == 1 ? 1 : num * factorial(num - 1);
}

countDown(5);
console.log("Sum Range", sumRange(6), "\n");
console.log("Factorial", factorial(5));
