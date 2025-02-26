//Question:14 Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.


function Sumofallnumbers(inputarr){

    let Total=0;
    for(element of inputarr)
    {
        Total+=element
    }
     return Total;
}

console.log(Sumofallnumbers([1,2,3,5,3,2,3,3,3,3,3,8,8,5,5]));
