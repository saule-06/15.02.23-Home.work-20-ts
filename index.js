// #1
function myName(name, surname) {
  console.log("My name is " + name + surname);
}
myName("Saule ", " Toigonbaeva");

// #2
function coneVolume(height, radius) {
  cVolume =  ((height * 3.14 * (radius) ** 2) / 3);
  console.log(cVolume);
}
coneVolume(8, 3);

// #3
function massage(a) {
  console.log(a.length);
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
  console.log(total);
}
san(4);

//#6
