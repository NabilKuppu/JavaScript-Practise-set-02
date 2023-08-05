"use strict";
//Coding challenge #1: Print numbers from 1 to 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//Coding challenge #2:Print the odd numbers less than 100

for (let i = 1; i < 100; i += 2) {
  console.log(i);
}
//Coding challenge #3:Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
  const row = "7*" + i + "=" + 7 * i;
  console.log(row);
}

for (let i = 1; i <= 10; i++) {
  const res = "10 *" + i + "=" + 10 * i;
  console.log(res);
}

for (let i = 1; i <= 10; i++) {
  console.log(`10*${i}=${10 * i}`);
}
//Coding challenge #4:Print the multiplication tables with numbers from 1 to 10
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    const res = n + "*" + i + "=" + n * i;
    console.log(res);
  }
}
multiplicationTable(5);

//Coding challenge #5 : Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);
//Coding challenge #6 : Calculate 10! Reminder n! = 1 * 2 * … * n
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
console.log(factorial);
//Coding challenge #7 : Calculate the sum of odd numbers greater than 10 and less or equal than 30

let sumOdd = 0;
for (let i = 11; i <= 30; i += 2) {
  sumOdd += i;
}
console.log(sumOdd);
//Coding challenge #8 : Create a function that will convert from Celsius to Fahrenheit Reminder: C = F – 32 / 1.8
function Celsius_to_Fahrenheit(C) {
  const F = C * 1.8 + 32;
  return F;
}
console.log(Celsius_to_Fahrenheit(20));
//Coding challenge #9 : Create a function that will convert from Fahrenheit to Celsius Reminder: C = F – 32 / 1.8
const Fahrenheit_to_Celsius = (F) => {
  const C = (F - 32) / 1.8;
  return C;
};
console.log(Fahrenheit_to_Celsius(68));
//Coding challenge #10 : Calculate the sum of numbers in an array of numbers.
//Example array:[2, 3, -1, 5, 7, 9, 10, 15, 95] Expected output: 145

const array = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let arrSum = 0;
array.forEach((el) => {
  arrSum += el;
});
console.log(arrSum);
//Function
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumArray(array));
