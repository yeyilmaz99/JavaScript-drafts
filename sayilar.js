// var num = 15.123456789;

// console.log(num.toPrecision(3));
// console.log(num.toFixed(4));
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.min(1,4,15,652,48));
// console.log(Math.max(1,4,15,652,48));


// var min = 50;
// var max = 100;
// console.log(min+Math.random()*(max-min))


var brutMaas= 3700;
var mesaiUcreti= 10.3;
var mesaiSuresi=42;
mesaiUcreti = (mesaiUcreti*mesaiSuresi);
var toplamBrutMaas= brutMaas+ mesaiUcreti;

var toplamNetMaas= toplamBrutMaas- toplamBrutMaas*0.25;

console.log(mesaiUcreti+brutMaas);
console.log(toplamNetMaas.toFixed(3));

