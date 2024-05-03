// Area of Rectangle

let p = 5
let l = 3

console.log("luas persegi panjang =", p * l)

//Perimeter of Rectangle

console.log("keliling persegi panjang =", 2* (p+l))

// diameter of circle

r = 5
pi = 3.14
console.log("luas lingkaran =", pi * (r ** 2))
console.log("keliling lingkaran =", 2*pi*r)
console.log("diameter lingkaran =", 2*r)

// Angle Triangle

suduta = 80
sudutb = 65

console.log("sudut segitiga =",180 - (suduta + sudutb))

// Difference Dates in Days

var date1 = new Date('2022-01-20');

var date2 = new Date('2022-01-22');

var differenceInDays = ((date2 - date1) / (1000 * 3600 * 24));

console.log("Jarak Hari = ", differenceInDays); 

// Convert Days to Years, Month and Days

var days = 400
var years = Math.floor (days/365)
var month = Math.floor ((days % 365) / 30)
var Days  = (days % 365) % 30

console.log(days + " days → " + years + " years, " + month + " months, " + Days + " days")

var days = 366
var years = Math.floor (days/365)
var month = Math.floor ((days % 365) / 30)
var Days  = (days % 365) % 30

console.log(days + " days → " + years + " years, " + month + " months, " + Days + " days")
