// Explain and demonstrate the behavior of hoisting with function declarations vs. function expressions. 
// What happens when you call a function before it’s declared?

// hoisting is js behavior where variable and fun declaration are moved to top of scope before execution

// hoisting works based on usage of function   declaration or function expression

// ---- Function declaration are fully hoisted . we can call function before declared

// for ex : sayHello()
//  sayHello() {
// console.log("Hi")}

// this works because of func declaration func(){}

//----- Fuction Expression
//  where function is assigned to variable and not hoisted complely, it is still undefined  sayHello is undefined


// sayHello()
// const myfunc= sayHello()
//{  console.log("Hello")
// }



//  if Var vs let and const

// if function expression is declared with var
// console.log(sayHello)  // op:undefined
// var sayHello=function()
// {
// console.log("Hello");

// }

//  sayHello()  -- >    errr sayHello is not func since its undefined



// var  and let and const
// console.log(sayHello)  refernce error function we are usig before initalization

/* let sayHello=fuction()
{
console.log("Hello");
}  */

// since variable is in temporal dead zone   behaviour in js where let and const variable is hoisted but cannot be acccessed until declaration is done