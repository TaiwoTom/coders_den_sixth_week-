//question1:Iterate 0 to 10 using for loop, do the same using while and do while loop

//using for loop
for (let num = 0; num <= 10; num++) {
  console.log(num); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

//using while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//using do while loop
let nm = 0;
do {
  console.log(nm);
  nm++;
} while (nm <= 10);

//question2:Iterate 10 to 0 using for loop, do the same using while and do while loop

//using for loop
for (let num = 10; num >= 0; num--) {
  console.log(num); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
}

//using while loop
let j = 10;
while (j >= 0) {
  console.log(j);
  j--;
}

//using do while loop
let r = 10;
do {
  console.log(r);
  r--;
} while (r >= 0);

//question3:Iterate 0 to n using for loop
// let n = prompt("Enter number to ascend");
// for (let numb = 0; numb <= n; numb++) {
//   console.log(numb);
// }

//question4:Write a loop that makes the following pattern using console.log():
let y = 1;
while (y <= 7) {
  console.log("# ".repeat(y));
  y++;
}

//question5:Use loop to print the following pattern:
for (let p = 0; p <= 10; p++) {
  result = p * p;
  console.log(`${p} x ${p} = ${result}`);
}

//question6:Using loop print the following pattern
for (let q = 0; q <= 10; q++) {
  console.log(`${q} ${q ** 2} ${q ** 3}`);
}

//question7:Use for loop to iterate from 0 to 100 and print only even numbers
for (let r = 2; r <= 100; r++) {
  if (r % 2 === 0) console.log(r);
}

//question8:Use for loop to iterate from 0 to 100 and print only odd numbers
for (let s = 0; s <= 100; s++) {
  if (s % 2 !== 0) console.log(s);
}

//question9:Use for loop to iterate from 0 to 100 and print only prime numbers
//numbb = prompt("Enter your number")
let count = 0;

for (j = 2; j <= 100; j++) {
  for (i = 1; i <= j; i++) {
    if (j % i == 0) count++;
  }

  if (count == 2) console.log(j);
  count = 0;
}

// question10:Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let u = 0; u <= 100; u++) {
  sum += u;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// question11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds
let sumE = 0;
let sumO = 0;
for (let u = 0; u <= 100; u++) {
  u % 2 === 0 ? (sumE += u) : (sumO += u);
}
console.log(
  `The sum of all evens from 0 to 100 is ${sumE}. And the sum of all odds from 0 to 100 is ${sumO}`
);

// question 12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let smE = 0;
let smO = 0;
let array = [];
for (let v = 0; v <= 100; v++) {
  v % 2 === 0 ? (smE += v) : (smO += v);
}
answer1 = array.push(smE);
answer2 = array.push(smO);
console.log(array);

// question13:Develop a small script which generate array of 5 random numbers
let array1 = [];
for (let i = 0; i < 5; i++) {
  array1.push(Math.floor(Math.random() * 10));
}
console.log(array1);

// question14:Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arr = [];
while (arr.length <= 4) {
  let rand = Math.floor(Math.random() * 21);
  if (!arr.includes(rand)) arr.push(rand);
}
console.log(arr);

// question15:Develop a small script which generate a six characters random id:

let chart = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let randCharId = 0;

for (let i = 0; i <= 4; i++) {
  randCharId += chart.charAt(Math.round(Math.random() * chart.length));
}
console.log(randCharId);
