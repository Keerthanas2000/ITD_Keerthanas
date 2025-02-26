//Question:16 Write a function that takes an object and returns an array of all the keys in the object


const paramobj ={
    "1 key":"1",
    "2 key":"2",
    "3 key":"3",
    "4 key":"4",
   
   
}


function getkeys (obj)
{
    return  Object.keys(obj)
}

console.log(
 "all keys", getkeys(paramobj)
);
