#! /usr/bin/env node
//import chalk and inquirer
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n \t\t code with mahnoor - word counter"));
console.log("=".repeat(60));
//prompt the user to enter a sentenvce
let answer = await inquirer.prompt([
    {
        name: "sentance",
        type: "input",
        message: "ENTER A SENTANCE ",
    }
]);
//triming the sentance and spliting into a words based on ""space"
let word = answer.sentance.trim().split(" ");
// analysis of the user input sentance 
console.log("=".repeat(60));
console.log(chalk.bold(" - sentance words"));
console.log(word);
console.log(chalk.bold(`\n -word count :${chalk.bold.redBright(word.length)}`));
console.log("=".repeat(60));
