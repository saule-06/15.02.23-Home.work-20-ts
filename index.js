// #1
function myName(name, surname) {
  console.log("My name is " + name + surname);
}
myName("Saule ", " Toigonbaeva");

// #2
function coneVolume(height, radius) {
  cVolume =  ((height * 3.14 * (radius) ** 2) / 3);
  console.log("Объем конуса равен - " + cVolume);
}
coneVolume(8, 3);

// #3
function massage(a) {
  console.log("Длина строки равна - " + a.length);
}
massage("How are you");

// #4
let example8 = [45, 33, 11, 60, 3, 10, 15];
for (let i = 0; example8.length > i; i++) {
  let num = example8[i];
  if (num % 2 === 0) {
  console.log(num + " - Odd");
  }
  else {
    console.log(num + " - Even");
  } 
}

//#5
function san(a) {
  total = a ** 2;
  console.log("Квадрат этого числа равен - " + total);
}
san(4);

//#6
function num(b) {
  console.log("Корень этого числа равен - " + Math.sqrt(b));
}
num(9);

// #7 
function perimeterofaPentagon(a, b, c, d, e) {
  perimeter = a + b + c + d + e;
  console.log("Периметр пятиугольника равна -  " + perimeter);
}
perimeterofaPentagon(3, 4, 2, 6, 8);

// #8
let number1 = 33;
for(let i = 0; i <= number1; i++) {
  if (i % 3 === 0) {
  console.log(i);
  }
}

// #9

// #10
let number2 = 10;
for (let i = 0; i <= number2; i++) {
  result = i ** 2; 
    console.log(result);
}

// // #11
// let n = a, b;
// for(let i = 0; i < n.length; i++) {
//   tot = i + n[i];
//   console.log(tot);
// }
// n(1, 25);

// #12
for (a = 0; a <= 20; a++ ) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

// #13
for (b = 0; b <= 15; b++) {
  if (b % 2 ==! 0) {
    console.log(b);
  }
}

// #14
let sans = ["Aidai", "Nazi", "Sezim", "Tilek"];
console.log(sans);

sans.unshift("Aibek");
sans.unshift("Merim");
sans.push("Rob"); 
sans.push("Dail"); 
sans.push("Kasi");

console.log(sans);

// #15


// #16
let line = ["I", "like", "to", "eat!"];
console.log(line.join(' '));

// #17
let numbers = ["one", "two", "three"];
console.log(numbers.reverse());
