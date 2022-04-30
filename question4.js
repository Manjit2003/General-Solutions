/**
 * Write a function that checks whether an element occurs in a list.
 */

const myChar = "M";

const myList = ["B", "Z", "M"];

for (var i = 0; i <= myList.length; i++) {
  const myNewChar = myList[i];

  if (myChar == myNewChar) {
    console.log("Yes it exists");
    break;
  }
}
