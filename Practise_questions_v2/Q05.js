// Question:05 Write a program that displays a string in reverse order.

const str="Keerthana";


let reversedstr=""
for (i=str.length-1;i>=0;i--)
{

reversedstr+=str[i]

}

console.log("reversed str",reversedstr);


// using built_in  convert to arr and the  reverse and then  join 


function Reversedstr(str)
{
    return str.split("").reverse().join("")
}

console.log("Builtin", Reversedstr(str));
