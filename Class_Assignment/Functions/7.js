// Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments.


function sum(...numbers)
{
    return numbers.reduce((total,num)=>total+num,0)


}


console.log(sum(1, 2, 3, 4, 5)); 
console.log(sum(10, 20));         
console.log(sum());              
console.log(sum(7, -3, 8, 2)); 

// ...numbers is restparameter  to capture all func argument into arr