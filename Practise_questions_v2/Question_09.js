// Question:09 Write a program that takes a string and prints out the number of vowels in the string.


const vowelstr="aeiou";

 function checkvowels(str)
 {

    let vowelcount=0
    for (char of str)
    {
       if (vowelstr.includes(char.toLowerCase() ))
       {
        vowelcount+=1
       }
    }

    return vowelcount
 }

 console.log("Number of vowels in str",
    checkvowels("aeiou AEIOU JJJKSS"));
