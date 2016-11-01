// console.log("Hello World file!");
//
// var input = "Hello"
// console.log(input);

// ruby if else in js
// if (input === undefined) {
//   console.log("It's undefined!");
// } else {
//   console.log(input);
// }

// ruby if/then truthy/falsey in js
// var input = "Hello"

// if (input) { //if the input is "defined", not "blank"
//   console.log("truthy");
// } else {
//   console.log("falsey");
// }

// ruby ternary statements in js
// var input = "hello";
// console.log(input ? "truthy" : "falsey");

// ruby else if in js
// var value = 0
//
// if (value === 0) {
//   console.log("zero");
// } else if (value === 1) {
//   console.log("one");
// } else {
//   console.log("something else");
// }

// ruby case/when in js
// var value = 0;
// switch (value) {
//   case 0:
//     console.log("zero");
//     break;
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//     default:
//      console.log("do something else");
//      break;
// }

// ruby while counting loop in js
// var counter = 0;
//
// while (counter < 10) {
//   console.log(counter);
//   counter++;
// }

// ruby loop do in js
// var counter = 0;
//
// while (true) {
//     console.log(counter);
//   if (counter > 10) break;
//   counter += 1;
// }
//
// var counter = 0;
//
// while (true) {
//   counter += 1;
//   if ((counter % 2) === 0)
//     console.log(counter);
//   if (counter > 10) break;
// }

// ruby for/each loops in js
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// ruby iterating over an array in older js
var array = [1,2,3];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// ruby iterating over an array in NEW js
var arr = ["a", "b", "c"];

arr.forEach(function(item) {
  console.log(item);
});

// var a = { one: 1, two: 2, three: 3, four: 4, five: 5 };
//
// a.forEach(function(x) {
//   console.log(a[(+x)]);
// });

// ruby methods in js
// function MyFunction() {
//   console.log("hi");
// }
//
// MyFunction();

// function MyFunction(arg) {
//   console.log(arg);
// }
//
// MyFunction("hello");

// ruby anonymous methds in js
// (function () {
//   console.log("anonymous function");
// })();

// var NamedFunction = function () {
//   console.log("anonymous function");
// };

// NamedFunction();

// ruby implicit return in js
// function one() {
//   return 1;
// }
//
// console.log(one());

// ruby *rest arguments in js
// variable lenght arguments are a default in js
// function functionWithVariableArgs(number) { //puts all the arguments into an array
//   console.log(arguments[0], number);  //this returns the first argument
// }

// function addAll() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }
//   return sum;
// }

// ruby methods with default arguments in js
// function functionWithDefaultArguments(n) {
//   if (n === undefined) {
//     n = 0;
//   }
//   console.log(n);
// }
