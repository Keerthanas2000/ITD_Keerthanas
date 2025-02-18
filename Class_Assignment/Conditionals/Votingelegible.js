// Write logic to check if the user is 18 years or older than 18 years allow him to vote, else infrom him how many more years he needs to become a voter

const { stdin, stdout } = require("process");
const readline = require("readline");
const readlineinterface = readline.createInterface({
  input: stdin,
  output: stdout,
});

readlineinterface.question("please enter your age: ", (age) => {
  age = parseFloat(age);
  if (isNaN(age)) {
    console.log("Please enter valid age");
  } else {
    if (age >= 18  && age <=110) {
      console.log("person is elegible to vote");
    } else if (age < 18  && age >=0) {
      console.log(`you need to wait ${18 - age} years to vote`);
    } else {
      console.log("Invalid age");
    }
  }

  readlineinterface.close();

});
