
const fs = require("fs");

fs.writeFileSync("example.txt", "This is an example");

//Create a copy of the newly created txt file using a method from the fs module.

fs.copyFileSync("example.txt", "example2.txt");

//Rename one of the files using a method from the fs module

fs.renameSync("example2.txt", "example2Rename.txt");

//Get a list of all the file names of the current directory using a method from the fs module.

const files = fs.readdirSync("./");

console.log(files);

//Find out and implement another method for the fs module.

fs.appendFileSync("example.txt", "New Example");