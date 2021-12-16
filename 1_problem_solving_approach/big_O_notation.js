// * Using Math formula
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// * Using iteration
function addUpTo_v2(n) {
  let c = 0;
  for (let i = 0; i < n; i++) c += n;
  return c;
}

const t1 = Date.now();
console.log(addUpTo_v2(50));
const t2 = Date.now();
console.log(addUpTo(50));

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
