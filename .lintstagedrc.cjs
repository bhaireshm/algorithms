const { resolve } = require("path");

const prettierConfig = {
  semi: true,
  "tab-width": 2,
  "print-width": 100,
  "single-quote": false,
  "bracket-same-line": true,
};

module.exports = {
  "./src/**/*.{ts,json}": async (fileNames) => {
    const escapedFileNames = fileNames.map((fileName) => resolve(fileName)).join(" ");

    return [
      `npx prettier --relative --cache ${objToParams(prettierConfig)} --write ${escapedFileNames}`,
      `git add ${escapedFileNames}`,
    ];
  },
};

function objToParams(obj) {
  return Object.entries(obj).reduce((prev, curr) => {
    return prev + `--${curr[0]} ${curr[1]} `;
  }, "");
}
