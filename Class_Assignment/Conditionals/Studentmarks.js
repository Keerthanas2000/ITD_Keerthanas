// Write a code which can give grades to students according to theirs marks using Conditionals

// 80%-100%, Distinction
// 60%-79%, First Class
// 50%-59%, Second Class
// 35%-49%, Pass
// 0%-34%, FAIL

// readline module import
const readline = require("readline");
const readlineinterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineinterface.question("Please enter your marks: ", (marks) => {
  marks = parseFloat(marks); // to check the input as a number
  let grade = "";

  if (isNaN(marks)) {  //  the input is not a number
    console.log("Please enter a valid marks.");
  } else {
    if (marks >= 80 && marks <= 100) {
      grade = "Distinction";
    } else if (marks >= 60 && marks <= 79) {
      grade = "First Class";
    } else if (marks >= 50 && marks <= 59) {
      grade = "Second Class";
    } else if (marks >= 35 && marks <= 49) {
      grade = "Pass";
    } else if (marks >= 0 && marks <= 34) {
      grade = "Fail";
    } else {
      grade = "Invalid marks"; // not in range of 0-100 
    }

    console.log(`Your grade is: ${grade}`);
  }

  readlineinterface.close();
});


