// Question:08 Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

 function sum(number)
{


 let Totalsum=0;
 
    for (let i=1;i<=number;i++)
    {
        Totalsum +=i
    }
  return Totalsum;


}

 

  let total = sum(3)
 console.log(`Total : ${total}`);
