import readlineSync from "readline-sync";

export default (name) => {
  console.log("Welcome to the Brain Games!");

  var name = readlineSync.question("May I have your name? ");

  console.log(`Hello, ${name}!`);
};
