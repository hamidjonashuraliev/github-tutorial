"use strict";
// const numbers = {
//     x: 10,
//     y: 4,
// };

// const addNumber = {
//     z: 20,
// };

// const allNumbers = Object.assign(numbers, addNumber);
// console.log(allNumbers);

// const arr = [1, 2, 3];
// const numbers = arr.slice();

// numbers[1] = "john";
// console.log(arr);
// console.log(numbers);

// spread operators

const real = ["ronaldo", "ramos"];
const manCity = ["mahrez"];

const mixPlayer = [...real, ...manCity];
console.log(mixPlayer);
