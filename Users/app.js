import {addUser, removeUser, readUser, updateUser} from "./utils.js";
import yargs from "yargs";
import {hideBin} from "yargs/helpers";

const yarg = yargs(hideBin(process.argv));

//* create command
yarg.command({
   command: "add",
   describe: "add new user",
   builder: {
      name: {
         describe: "user name",
         demandOption: true,
         type: "string",
      },
      email: {
         describe: "user email",
         demandOption: true,
         type: "string",
      },
   },
   handler: function (argv) {
      addUser(argv.name, argv.email);
   },
});

//* remove command
yarg.command({
   command: "remove",
   describe: "remove user",
   builder: {
      id: {
         describe: "id",
         demandOption: true,
         type: "string",
      },
   },
   handler: function (argv) {
      removeUser(argv.id);
   },
});

//* read command
yarg.command({
   command: "read",
   describe: "read user",
   builder: {
      id: {
         describe: "id",
         demandOption: true,
         type: "string",
      },
   },
   handler: function (argv) {
      readUser(argv.id);
   },
});

//* update command
yarg.command({
   command: "update",
   describe: "update user",
   builder: {
      id: {
         describe: "id",
         demandOption: true,
         type: "string",
      },
      name: {
         describe: "user name",
         type: "string",
      },
      email: {
         describe: "user email",
         type: "string",
      },
   },
   handler: function (argv) {
      updateUser(argv.id, argv.name, argv.email);
   },
});

yarg.parse();