const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const prompt = require("prompt");
const optimist = require("optimist");
const helper = require("./helper");

const folders = removeHiddenFolders(fs.readdirSync(__dirname));
const folderStructure = {};

// * Read arguments
prompt.override = optimist.argv;

for (let i = 0; i < folders.length; i++) {
  const folder = folders[i];
  if (fs.lstatSync(getPath(folder)).isDirectory()) {
    folderStructure[folder] = [];
    fs.readdirSync(getPath(folder)).forEach((file, j) => {
      const fileName = `${i + 1}.${j + 1}_${file}`;
      folderStructure[folder].push(fileName);
    });
  }
}

if (Object(prompt.override).hasOwnProperty("fileNumber")) {
  prompt.stop();
} else {
  // * Log all files and folders
  console.log("\n");
  Object.keys(folderStructure).forEach((key, i) => {
    console.log("Folder: ", key);
    for (let j = 0; j < folderStructure[key].length; j++) {
      const file = folderStructure[key][j];
      console.log("         ", file);
    }
    console.log("\n");
  });

  console.log("Select a file to execute");
  prompt.start();
}

prompt.get(["fileNumber"], function (err, result) {
  if (err) console.error(err);

  console.log("Input:", result);
  const fileFullPath = getFile(result.fileNumber);

  exec(`node ${fileFullPath}`)
    .stdout.on("data", (data) => {
      console.log(data);
      // console.log("Execution complete.");
    })
    .on("end", () => {
      process.exit(0);
    });
});

// * ------------------------------------------------------------------------- * //
// * Private functions
function removeHiddenFolders(folders) {
  return folders.filter((fold, i) => {
    if (!fold.startsWith(".") && fold != "node_modules") return fold;
  });
}

function getPath(fp) {
  return path.join(__dirname, fp);
}

function getFile(fileNumber) {
  const indexes = String(fileNumber).split(".");
  const folderName = Object.keys(folderStructure)[indexes[0] - 1];
  if (!folderName) {
    helper.error("Folder not found!!");
    process.exit(1);
  }
  const fileName = Object.values(folderStructure)[indexes[0] - 1][indexes[1] - 1];
  if (!fileName) {
    helper.error("File not found!!");
    process.exit(1);
  }
  const actualFileName = fileName.replace(`${fileNumber}_`, "");
  const fileFullPath = getPath(path.join(folderName, actualFileName));

  console.log("\nExecuting file ", fileFullPath);
  helper.titleLog(actualFileName.replace(".js", "").replace(/_/g, " ").toUpperCase());

  return fileFullPath;
}
