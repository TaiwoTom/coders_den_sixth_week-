//Question1: Copy countries array(Avoid mutation)

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

copyOfCountriesArr = countries.slice(0);
console.log(copyOfCountriesArr);

//Question2: Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries.
const sortedCountries = copyOfCountriesArr.slice().sort();
console.log(sortedCountries);

//Question3: Sort the webTechs array and mernStack array.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

sortWebTechs = webTechs.sort();
sortMernStack = mernStack.sort();
console.log(sortWebTechs);
console.log(sortMernStack);

//Question4: Extract all the countries contain the word 'land' from the countries array and print it as arr
arrr = [];
for (const i of countries) {
  if (i.includes("land")) {
    arrr.push(i);
  }
}
console.log(arrr);

//Question 5: Find the country containing the hightest number of characters in the countries array
maxWord = 0;
for (const i of countries) {
  if (i.length >= maxWord) {
    maxWord = i.length;
  }
}
console.log(maxWord);
for (const i of countries) {
  if (i.length === maxWord) {
    console.log(i);
  }
}

//Question 6:same as Question 4

//Question 7:  Extract all the countries containing only four characters from the countries array and print it as array
arrayForFourChar = new Array();
for (const i of countries) {
  if (i.length === 4) {
    arrayForFourChar.push(i);
  }
}
console.log(arrayForFourChar); //there is no country with the length four in the array.

//Question 8: Extract all the countries containing two or more words from the countries array and print it as array
arrayForTwoOrMoreChar = new Array();
for (const i of countries) {
  if (i.length >= 2) {
    arrayForTwoOrMoreChar.push(i);
  }
}
console.log(arrayForTwoOrMoreChar);

//Question9: Reverse the countries array and capitalize each country and stored it as an array
countriesReverse = countries.reverse();
countriesUpperCase = [];
for (let i = 0; i < countries.length; i++) {
  countriesUpperCase.push(countriesReverse[i].toUpperCase());
}
console.log(countriesUpperCase);
