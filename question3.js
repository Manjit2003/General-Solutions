/**
 * Write function that reverses a list, preferably in place.
 */

const myList = ["M", "A", "N", "J", "I", "T"];
const myReverseList = [];

for (const i = myList.length - 1; i >= 0; i--) {
  myReverseList.push(myList[i]);
}

console.log(myReverseList);
