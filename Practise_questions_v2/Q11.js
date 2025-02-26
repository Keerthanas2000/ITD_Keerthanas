// Question:11 Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

const string = "djwuifhuiewfiwe njenfj asfna  eiffff33 44";
function countLetters(String) {
  let opobj = {};
  for (char of String) {

    if (opobj[char])
    {
        opobj[char] +=1
    }
    else{
        opobj[char] =1;
    }
    // OR opobj[char] = (opobj[char] || 0) + 1;

//     If opobj[char] exists, it increments.
// If opobj[char] does not exist, it treats it as 0 and then adds 1, just like our if-else solution.
  }

  return console.log(opobj);
}

countLetters(string);
