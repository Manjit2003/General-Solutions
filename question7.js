/**
 * Write a function that tests whether a string is a palindrome.
 */

const myName = "MANJIT";

const myList = myName.split("");

const myListReverse = [...myList].reverse();

let isPalidrome = true;

for (let i = 0; i <= myList.length; i++) {
  if (myList[i] !== myListReverse[i]) {
    console.log("Not Palidrome");
    isPalidrome = false;
    break;
  }
}

if (isPalidrome) {
  console.log("String is palidrome");
}
