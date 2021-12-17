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
  logFiles();
  prompt.start();
}

startPrompt();

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

function logFiles() {
  console.log("\n");
  Object.keys(folderStructure).forEach((key, i) => {
    helper.log(" " + key.split("_").slice(1).join(" ").toUpperCase());
    for (let j = 0; j < folderStructure[key].length; j++) {
      const file = folderStructure[key][j];
      console.log(" ".repeat(3), file);
    }
    console.log("\n");
  });

  console.log("Select a file to execute");
}

function getFile(fileNumber) {
  const indexes = String(fileNumber).split(".");
  const folderName = Object.keys(folderStructure)[indexes[0] - 1];
  if (!folderName) {
    helper.error("Folder not found!!");
    return false;
  }
  const fileName = Object.values(folderStructure)[indexes[0] - 1][indexes[1] - 1];
  if (!fileName) {
    helper.error("File not found!!");
    return false;
  }
  const actualFileName = fileName.replace(`${fileNumber}_`, "");
  const fileFullPath = getPath(path.join(folderName, actualFileName));

  console.log("\nExecuting file ", fileFullPath);
  helper.titleLog(actualFileName.replace(".js", "").replace(/_/g, " ").toUpperCase() + " !!!");

  return fileFullPath;
}

function startPrompt() {
  console.log("Enter zero(0) to exit the program");
  console.log("Enter 'l' or 'list' to list the files\n");

  prompt.get(["fileNumber"], function (err, result) {
    if (err) console.error(err);
    console.log("Input:", result);
    const fileNumber = result.fileNumber;

    if (["0", "zero"].some((r) => r == fileNumber.toLowerCase())) {
      helper.warn("Program exited !!!");
      prompt.stop();
      process.exit(0);
    }

    if (["l", "list"].some((r) => r == fileNumber.toLowerCase())) {
      logFiles();
      startPrompt();
      return;
    }

    if (!isNaN(Number(fileNumber)) && Number(fileNumber) > 0) {
      const fileFullPath = getFile(fileNumber);

      if (!fileFullPath) {
        startPrompt();
        return;
      }

      exec(`node ${fileFullPath}`, function (err, stdout, stderr) {
        if (err) console.error(err);
        if (stderr) console.error(stderr);
        if (stdout) console.log(stdout);
        console.log("-".repeat(50));
        startPrompt();
        return;
      });
    } else {
      helper.error(`Invalid Input`);
      startPrompt();
      return;
    }
  });
}
