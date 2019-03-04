/** Constructor new 2~12*/
// function ES5(name) {
//   this.name = name;
// }
// class ES6 {
//   constructor(name) {
//     this.name = name;
//   }
// }
// const es5 = new ES5('ES5');
// const es6 = new ES6('ES6');
// console.log(es5.name, es6.name);

/** Constructor 일반함수 15~28*/
// function ES5(name) {
//   this.name = name;
//   return name + ' es5';
// }
// class ES6 {
//   constructor(name) {
//     this.name = name;
//     return name + ' es6';
//   }
// }
// console.log(ES5('ES5'));
// console.log(ES5.prototype.constructor('ES5'));
// console.log(ES6('ES6'));
// console.log(ES6.prototype.constructor('ES6'));

/** Super Extends 31~44*/
// function Parent() {
//   this.a = 1;
// }
//
// function Child() {
//   this.b = 2;
// }
//
// Child.prototype = new Parent();
//
// var obj = new Child();
// console.log(obj.a, obj.b);
// console.log(obj.hasOwnProperty('a'));
// console.log(obj.hasOwnProperty('b'));

/** Super Extends 47~61*/
// class Parent {
//   constructor() {
//     this.a = 1;
//   }
// }
// class Child extends Parent {
//   constructor() {
//     super();
//     this.b = 2;
//   }
// }
// const obj = new Child();
// console.log(obj.a, obj.b);
// console.log(obj.hasOwnProperty('a'));
// console.log(obj.hasOwnProperty('b'));

