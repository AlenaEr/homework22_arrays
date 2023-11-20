// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.

let arr = [];
let arrLength = parseInt(prompt('Введіть довжину масиву (min 4 елементи):'));
for (let i = 0; i < arrLength; i++) {
  let el = prompt('Введіть елемент масиву:');
  arr.push(el);
}
console.log('Початковий масив:', arr);

arr.sort((a, b) => a - b);
console.log('Відсортований масив:', arr);

arr.splice(1, 3);
console.log('Масив після видалення елементів з 2 по 4:', arr);