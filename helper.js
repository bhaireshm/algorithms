const LCERROR = "\x1b[31m%s\x1b[0m"; //red
const LCWARN = "\x1b[33m%s\x1b[0m"; //yellow
const LCINFO = "\x1b[36m%s\x1b[0m"; //cyan
const LCSUCCESS = "\x1b[32m%s\x1b[0m"; //green

exports.titleLog = function (...a) {
  console.log(LCSUCCESS, ...a, "\n");
};

exports.log = function (...a) {
  console.log(LCINFO, ...a);
};

exports.success = function (...a) {
  console.log(LCSUCCESS, ...a);
};

exports.warn = function (...a) {
  console.warn(LCWARN, ...a);
};

exports.error = function (...a) {
  a.reverse().push("ERROR:");
  a.reverse();
  console.error(LCERROR, a.join(" "), "\n");
};

exports.timeComplexity = function (type, ...a) {
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
  console.log(LCINFO, msg, ...a);
};
