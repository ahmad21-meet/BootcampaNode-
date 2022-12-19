import chalk from "chalk";
import uniqid from "uniqid";
import {writeFileSync, readFileSync} from "fs";

 const addUser= function (name , email){
const users = loadUser()
const dup = users.filter((user)=>{
   return user.name== name
})
if(!dup.length){
users.push({
   id:uniqid(),
   name:name,
   email:email
})
saveUsers(users)
console.log(chalk.green.inverse("new user was added by me "));
}
 else {
   console.log(chalk.red("User Name Is Taken!!!!!!"));
}
 }



 const removeUser =(id)=>{
   const users = loadUser()
   const filterUser = ex.filter((user)=>{
      return user.id !== id
   })
   if(filterUser.length>users.length){
      console.log(chalk.green("User Removed"));
      saveUsers(filterUser)
   }
   else{
      console.log(chalk.red("User Not Found"));
   }
 }

 const readUser = (id) =>{
   const users= loadUser()
   const user = users.find((user)=> user.id ==id);
   if(user){
      console.log(user);
   }
   else{
      console.log(chalk.red("User Not Found"));

   }
 };

 const updateUser = (id , name , email)=>{
   const users = loadUser()
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

 
 const loadUser= function (){
   try{
      const databuffer = fs.readFileSync("users.json")
      const dataJson = databuffer.toString();
      return JSON.parse(dataJson)
   }
   catch (e){
      return []

   }
 }


 const saveUsers = (users)=>{
   const dataJson = JSON.stringify(users)
   fs.writeFileSync("users.json", dataJson)
   }
 module.exports = {
   addUser,
   removeUser,
   readUser,
   updateUser
 }