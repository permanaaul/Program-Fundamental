// Celcius to Fahrenheit

var celcius = 60;
var fahrenheit = (celcius * 9/5) + 32 ;

console.log (celcius, "Celcius =", fahrenheit, "Fahrenheit")

// Check whether the number is odd or even
number = 25

if (number % 2 === 0) {
    console.log ("angka genap =", number)
} else {
    console.log ("angka ganjil =", number)
}

// check whether the number is prime number or not
var number = 49;
var isPrime = true;

if (number <= 1) {
    console.log(number + " is not a prime number.");
} else {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is not a prime number.");
    }
}

// find the sum of the numbers 1 to n
var n = 3;
var sum = 0;

for (var i = 1; i <= n; i++) {
    sum += i;
}
console.log("Penjumlahan dari 1 ke " + n + " adalah = " + sum);

// factorial

var number = 6;
var factorial = 1;

for (var i = number; i > 1; i--) {
    factorial *= i;
}

console.log(number + "! = " + factorial);

// fibonacci
var n = 15;
var a = 1, 
b = 1;

for (var i = 1; i < n; i++) {
    var temp = b;
    b = a + b;
    a = temp;
}
console.log("Nilai Fibonacci ke-" + n + " adalah: " + a);

// looping nama
let name = "aulia permana";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// hitung huruf
let name2 = "aulia permana";
let count = 0;

// looping untuk menghitung jumlah kemunculan huruf 'a'
for (let i = 0; i < name2.length; i++) {
    if (name2[i] === 'a') {
        count++;
    }
}
console.log("Jumlah huruf 'a' adalah " + count);