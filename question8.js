const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const yourList = "qwertyuio".split("");
const myNewList = [];

for (let i = 0; i <= myList.length - 1; i++) {
  myNewList.push(myList[i]);
  myNewList.push(yourList[i]);
}

console.log(myNewList);
