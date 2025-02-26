// Question:10 Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.

const arr1 = [1, 2, 4, 5,3];

const arr2 = [3, 4, 5, 6,5, 7];

function findcommonelements(arr1, arr2) {
  let commonelements = [];
  for (let i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]  && !commonelements.includes(arr1[i]))  {
        commonelements.push(arr1[i]);
      }
    }
  }

  return commonelements.sort((a,b)=>a-b);
}

console.log(findcommonelements(arr1,arr2))



// using built in functions


function findcommonelementsv2(arr1,arr2)
{
  let commonelement=arr1.filter((elemts)=>arr2.includes(elemts));
  return [...new Set (commonelement)].sort((a,b)=>a-b);
}

console.log(findcommonelementsv2(arr1,arr2))