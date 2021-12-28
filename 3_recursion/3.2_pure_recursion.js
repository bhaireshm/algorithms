function collectOddNumbers(arr = []) {
  console.log(arr);
  let newArr = [];
  if (arr.length === 0) return [];
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddNumbers(arr.slice(1)));
  return newArr;
}

console.log("Result:", collectOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
