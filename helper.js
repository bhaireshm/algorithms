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
