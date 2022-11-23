//question1:Develop a small script which generate any number of characters random id

let chart = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let randCharId = 0;

for (let i = 0; i <= Math.round(Math.random() * 6); i++) {
  randCharId += chart.charAt(Math.round(Math.random() * chart.length));
}
console.log(randCharId);

//question2:Write a script which generates a random hexadecimal number.

let randHexNumList = "0123456789ABCDEF";
let randHexNum = 0;
for (let j = 0; j <= 4; j++) {
  randHexNum += randHexNumList.charAt(
    Math.round(Math.random() * randHexNumList.length)
  );
}
console.log(`#${randHexNum}`);

//question3:Write a script which generates a random rgb color number.

randRgb =
  "rgb(" +
  (Math.floor(Math.random() * 255) + 1) +
  "," +
  (Math.floor(Math.random() * 255) + 1) +
  "," +
  (Math.floor(Math.random() * 255) + 1) +
  ")";

console.log(randRgb);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
//question4:Using the above countries array, create the following new array
const aryy = [];
for (let i = 0; i < countries.length; i++) {
  aryy.push(countries[i].toUpperCase());
}
console.log(aryy);

//question5: Using the above countries array, create an array for countries length'.
const aryylen = [];
for (let i = 0; i < countries.length; i++) {
  aryylen.push(countries[i].length);
}
console.log(aryylen);

//question6:Use the countries array to create the following array of arrays:
const aryyAryy = [];

for (let i = 0; i < countries.length; i++) {
  aryyAryy.push([
    countries[i],
    countries[i][0].toUpperCase() +
      countries[i][1].toUpperCase() +
      countries[i][2].toUpperCase(),
    countries[i].length,
  ]);
}
console.log(aryyAryy);

//Question7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

arrr = [];
for (let i = 0; i < countries.length; i++) {
  cond = countries[i].includes("land");
  if (cond) {
    arrr.push(countries[i]);
  }
}
if (arrr) {
  console.log(arrr);
} else {
  console.log("All these countries are without land");
}

//Question8: In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

arrray = [];
for (let i = 0; i < countries.length; i++) {
  cond = countries[i].includes("ia");

  if (cond) {
    arrray.push(countries[i]);
  }
}
if (arrray) {
  console.log(arrray);
} else {
  console.log("All these countries are without land");
}

//Question9: Using the above countries array, find the country containing the biggest number of characters.
biggestChar = 0;
for (const i of countries) {
  if (i.length >= biggestChar) {
    biggestChar = i.length;
  }
}
console.log(biggestChar);
for (const i of countries) {
  if (i.length === biggestChar) {
    console.log(i);
  }
}

//Question10:Using the above countries array, find the country containing only 5 characters.
arrayForFiveChar = new Array();
for (const i of countries) {
  if (i.length === 5) {
    arrayForFiveChar.push(i);
  }
}
console.log(arrayForFiveChar);

//webTechs array is below:
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//Question11: Find the longest word in the webTechs array
longestWord = 0;
for (const i of webTechs) {
  if (i.length >= longestWord) {
    longestWord = i.length;
  }
}
console.log(longestWord);
for (const i of webTechs) {
  if (i.length === longestWord) {
    console.log(i);
  }
}

//Question 12: Use the webTechs array to create the following array of arrays:
const aryOfAry = [];

for (let i = 0; i < webTechs.length; i++) {
  aryOfAry.push([webTechs[i], webTechs[i].length]);
}
console.log(aryOfAry);

//mernStack array is below:
const mernStack = ["MongoDB", "Express", "React", "Node"];
//Question 13: An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const acronymMern = [];

for (let i = 0; i < mernStack.length; i++) {
  acronymMern.push(mernStack[i][0]);
}
console.log(acronymMern.join(""));

//Question 14: Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const j of array) {
  console.log(j);
}

//Question 15: This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
fruitArray = ["banana", "orange", "mango", "lemon"];
for (let i = fruitArray.length - 1; i >= 0; i--) {
  console.log(fruitArray[i]);
}

//Question 16: Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j <= fullStack[i].length - 1; j++) {
    console.log(fullStack[i][j]);
  }
}
