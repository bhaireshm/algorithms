console.timeComplexity = function (type) {
  let msg = "Time complexity - ";
  switch (type) {
    case "1":
      msg += "O(1)";
      break;
    case "n":
      msg += "O(n)";
      break;
    case "n2":
      msg += "O(n2)";
      break;
    case "logn":
      msg += "O(log n)";
      break;
    case "nlogn":
      msg += "O(n log n)";
      break;
    default:
      break;
  }
  const args = [msg];
  this.log.apply(this, args);
};

// not working, try different methods
global.Date.prototype.addHours = function (hrs) {
  this.setHours(+hrs + this.getHours());
  return this;
};
