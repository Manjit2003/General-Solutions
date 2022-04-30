/**
 * Write a program to find the first repeating char in string
 */

const myName = "ABCDA";
const myList = [];

for (i = 0; i < myName.length; i++) {
  const char = myName[i];

  const isFound = myList.includes(char);

  if (isFound == true) {
    console.log("First repeating char : " + char);
    break;
  } else {
    myList.push(char);
  }
}
