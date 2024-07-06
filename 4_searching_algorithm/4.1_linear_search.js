function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) if (arr[i] == val) return i;
  return -1;
}

console.log("Result:", linearSearch([12, 3, 5, 2, 2, 2, 23, 23], 3));
