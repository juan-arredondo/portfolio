// // weird stuff only in js
//
// // Ruby's "block" syntax
// example: 5.times {puts "hello"}
//
// function times(number, func) {
//   console.log(number, func);
//   for (var i = 0; i < number; i++) {
//     console.log(i);
//     func();
// }
//
// function sayHello() {
//   console.log("hello");
// }
//
// times(5, sayHello);
//
// // ruby each
// var arr = [1,2,3];
// arr.forEach(function(item) {
//   console.log(itme);
// });

var a = [0,1,2];
console.log(a);

a["x"] = "something";
a["y"] = "something";
a["z"] = "something";

// iterating over a hash *****
for (var item in a) {
  console.log(a);
// }
// // ****************************

// // hoisting
// console.log(x == undefined);
//
// var x = 5; //will put this variable all the way at the top. !dangerous
// // declaire your variables at the begining of the program


var a = { one: 1, two: 2, three: 3, four: 4, five: 5 };

for (var item in a) {
  console.log(item, a[item]);
}
