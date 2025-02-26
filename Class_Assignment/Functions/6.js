// Write a function multiplyNumbers(a, b = 1) that multiplies two numbers. If the second argument is not provided, use 1 as the default value.


function multiplyNumbers(a, b = 1) {
    return a * b;
}

console.log(multiplyNumbers(5, 3)); 
console.log(multiplyNumbers(7));    
console.log(multiplyNumbers(4, 0)); 
