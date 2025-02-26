//Question:17 Write a function that takes an array of objects and returns an array of all the values of a specified property name



function getallvalues(obj, property)
{
 return obj.map(key=>key[property])
}
const objArray = [
  {
    Name: "Priyansh",
    Age: 20,
    City: "Goa",
    Gender: "Male",
  },

  {
    Name: "Khushi",
    Age: 17,
    City: "Goa",
  },

  {
    Name: "Bhosu",
    Age: 20,
    City: "Delhi",
    Gender: "Transgender",
  },

  {
    Name: "Sumit",
    Age: 24,
    City: "Mumbai",
    Gender: "Male",
  },
];

console.log(getallvalues(objArray,"Name"));
console.log(getallvalues(objArray,"Age"));
console.log(getallvalues(objArray,"City"));
console.log(getallvalues(objArray,"Gender"));
console.log(getallvalues(objArray,"nokey"));

