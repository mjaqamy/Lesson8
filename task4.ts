// Написать функцию, которая поменяет переменные местами, не создавая дополнительную переменную

let num1 = 5;
let num2 = 7;

function swapVariable() {
  [num1, num2] = [num2, num1];
}
swapVariable();
console.log(num1, num2);
