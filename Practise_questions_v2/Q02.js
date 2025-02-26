// Write a function that takes a string as an argument and returns its length.

function stringlength (string)
{
    return string.length;
}


const string_length= stringlength("Keerthana s")

console.log("String length",string_length);

// without using in built func


count=0;
for (char in "Keerthana s")

{


    count+=1
}

console.log("For_in",count);
