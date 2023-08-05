"use strict";
//Coding challenge #1: Print numbers from 1 to 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
/*Coding challenge #2:
Print the odd numbers
less than 100*/

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
