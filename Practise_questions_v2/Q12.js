//Question:12 Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

//Closure Implementation

function createCounter() {
  let count = 0;
  return function counter() {
    count++;
    return count;
  };
}

const mycounter = createCounter();
console.log(mycounter());
console.log(mycounter());
console.log(mycounter());
console.log(mycounter());
