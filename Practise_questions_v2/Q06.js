// Question:06 Write a program that takes a number and checks whether it is positive, negative, or zero.


function checknumber(number)
{

    return number>0?"positive":number< 0?"negative":"zero"
}

console.log("Checknumber",checknumber(5));
console.log("Checknumber",checknumber(-5));
console.log("Checknumber",checknumber(0));
