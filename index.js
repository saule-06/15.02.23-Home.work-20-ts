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
for(i = 0; i <= number1; i++) {
  if (i % 3 === 0) {
  console.log(i);
  }
}

// #9

// #10
let number2 = 10;
for (i = 0; i <= number2; i++) {
  result = i ** 2; 
    console.log(result);
}


