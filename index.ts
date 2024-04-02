#! /usr/bin/env node

import inquirer from "inquirer";

let todos : string[] = [];
let condition :boolean = true;

while (condition) {
  let answer = await inquirer.prompt(

    [
    {
      name: "todo",
      type: "input",
      message: "What you want to add in your Todos?",
    },

    {
      name: "addmore",
      type: "confirm",
      message: "Do you want to add more?",
      default: false
    }
    ]
  );
const {todo , addmore} = answer
condition = addmore
if(todo) {
  todos.push(todo)

 } else {
  console.log("please enter valid input");
 } 
}
if(todos.length > 0) {
  console.log("your todo List:");
  todos.forEach(todo => {
    console.log(todo);
  })
}else {
  console.log("No todos found");
}
