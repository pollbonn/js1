// задача 1
const str = "abcde"
console.log(str[0], str[1], str[4]);

// задача 2
let a = parseInt(prompt ("Введите первое число:"));
let b = parseInt(prompt ("Введите второе число:"));
console.log(a > 0 || b > 0);

// задача 3
let age = parseInt(prompt("Введите ваш возраст:"));
if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}


// Домашка 2

// Задача №1
let old = parseInt(prompt("Введите ваш возраст: "));
if (old < 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}

// Задача №3
let n = parseInt(prompt("ваше число: "));
if (n % 2 === 0) {
    console.log("ваше число чётное");
} else {
    console.log("ваше число нечётное");
}

// Задача 7
const userInput = prompt("Введите число:");
const number = Number(userInput);
if (number > 100) {
  console.log("Большое число");
} else if (number < 100) {
  console.log("Маленькое число");
} else if (number === 100) {
  console.log("Точно 100!");}