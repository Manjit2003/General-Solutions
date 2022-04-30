/**
 * 
Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********

 * 
 */

const myWords = ["hanumansingh", "Hello", "World", "in", "a", "rame", "boy"];

let lenghts = [];

for (let i = 0; i <= myWords.length - 1; i++) {
  lenghts.push(myWords[i].length);
}

const biggestLenght = lenghts.sort(function (a, b) {
  return a - b;
})[lenghts.length - 1];

console.log(biggestLenght);

console.log("*".repeat(biggestLenght + 4));

for (let i = 0; i <= myWords.length - 1; i++) {
  let lengthDiffrence = biggestLenght - myWords[i].length;
  let word = myWords[i];
  console.log(`* ${word} ${" ".repeat(lengthDiffrence)}*`);
}

console.log("*".repeat(biggestLenght + 4));
