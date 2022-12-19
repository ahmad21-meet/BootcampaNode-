import chalk from "chalk";
import uniqid from "uniqid";
import {writeFileSync, readFileSync} from "fs";

const addUser = (name, email) => {
   const users = loadUsersFromJsonFile();
   const duplicatedUsers = users.filter((user) => {
      return user.name === name;
   });
   if (!duplicatedUsers.length) {
      users.push({
         id: uniqid(),
         name: name,
         email: email,
      });
      saveUser(users);
      console.log(chalk.green("New User Added"));
   } else {
      console.log(chalk.red("User Name Is Taken!!!!!!"));
   }
};

const removeUser = (id) => {
   const users = loadUsersFromJsonFile();
   const filteredUsers = users.filter((user) => {
      return user.id !== id;
   });
   if (filteredUsers.length < users.length) {
      saveUser(filteredUsers);
      console.log(chalk.green("User Removed"));
   } else {
      console.log(chalk.red("User Not Found"));
   }
};
const readUser = (id) => {
   const users = loadUsersFromJsonFile();
   const user = users.find((user) => user.id === id);
   if (user) {
      console.log(user);
   } else {
      console.log(chalk.red("User Not Found"));
   }
};
const updateUser = (id, name, email) => {
   const users = loadUsersFromJsonFile();
   const user = users.find((user) => user.id === id);
   if (user) {
      user.name = name ? name : user.name;
      user.email = email ? email : user.email;
      saveUser(users);
      console.log(chalk.green("User Updated"));
   } else {
      console.log(chalk.red("User Not Found"));
   }
};
const loadUsersFromJsonFile = function () {
   try {
      const dataBuffer = readFileSync("users.json");
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
   } catch (e) {
      return [];
   }
};

const saveUser = (data) => {
   const dataJSON = JSON.stringify(data);
   writeFileSync("users.json", dataJSON);
};

export {addUser, removeUser, readUser, updateUser};