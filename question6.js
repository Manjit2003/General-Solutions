/**
 * Write a function that computes the running total of a list.
 */

const myList = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

for (i = 0; i <= myList.length - 1; i++) {
  sum = sum + myList[i];
}

console.log(sum);
