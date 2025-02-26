//Question:13 Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function sumEvenNumbers(inputarr) {
  let Total = 0;
  for (element of inputarr) {
    if (element %2 == 0) {
        Total+=element
    }
  }
  return Total;
}

console.log(
  sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
);
