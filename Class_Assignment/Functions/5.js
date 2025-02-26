// Create an anonymous function that takes an array of numbers and returns the sum of all the numbers


const res= function(numbers)
{


    let total=0;
    for ( ele of numbers)
    {
total+=ele
    }
    return total
}

const numbers=[1,2,3,4,5]

console.log(res(numbers));


// using reduce

console.log("Reduce total", numbers.reduce((total,num)=> total+num,0));

// Arrow func in single line  insted of func
  

const totalsum=(numbers)=>numbers.reduce((total,num)=> total+num,0)
console.log("Arrow fun", totalsum(numbers) );


