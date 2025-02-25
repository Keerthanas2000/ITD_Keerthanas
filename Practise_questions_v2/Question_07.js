// Question:07 Write a program that takes a number and prints the multiplication table for that number.

function multiplicationtable(number)
{

    console.log(`Table of ${number}`);

    for(i=1;i<=10;i++)
    {
        
        console.log(`${number}X${i}=${number*i}`);
        
    }
}

multiplicationtable(7)