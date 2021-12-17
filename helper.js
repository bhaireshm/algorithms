exports.titleLog = function (...a) {
  console.log(...a, "!!!\n");
};

exports.error = function (...a) {
  console.error("ERROR:", ...a);
};
