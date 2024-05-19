// How do you declare a variable named age and assign the value 25 to it?
let age = 25;
// How do you declare another variable named name and assign the value "John"?
let name = "John";
// How do you declare a variable greeting and assign a string that combines "Hello, " with a variable name?
let greetings = `Hello, ${name}`;
console.log(greetings);
// How do you declare two variables x and y with values 10 and 5 respectively? How do you perform and log the result of addition, subtraction, multiplication, and division?
let x = 10;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
// How do you declare a variable isAdult and set it to true if the age is 18 or more, otherwise set it to false?
let isAdult = false;
if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}
console.log(isAdult);
// How do you create an object person with properties name, age, and isAdult? How do you add a method greet that logs a greeting message using the name?
const person = {
  name1: name,
  age1: age,
  isAdult: isAdult,
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};
person.greet();
// How do you use template literals to create a variable description that contains a sentence about the person object?
console.log(
  `${person.name} is very hardworking and young at age of ${person.age}`
);
// How do you write a function checkType that takes a variable and logs its data type?
const checkType = (variable) => {
  return typeof variable;
};
console.log(checkType("jhgjh"));
// How do you declare a constant PI and assign it the value 3.14? What happens if you attempt to reassign it?
const PI = 3.14;
// How do you create a deep copy of the person object without using JSON methods?
const deepCopy = { ...person };
console.log(deepCopy);
// How do you use destructuring to extract name and age from the person object into separate variables?
const { name1, age1 } = person;
console.log(name1, age1);
// How do you add a new property to the person object with a name stored in a variable propertyName and a value 42?
person.propertyName = 42;
console.log(person);
// How do you write a function that returns another function creating a closure, demonstrating the block scope of let and const?
const fun1 = () => {
  let army = "pakArmy";
  const fun2 = () => {
    let service = `${army} had guns`;
    console.log(service);
  };
  return fun2;
};
const myFun2 = fun1();
myFun2();
