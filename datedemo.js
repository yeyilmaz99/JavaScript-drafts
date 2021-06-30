// var dt = new Date();
// console.log(dt);
// console.log(dt.getDate());
// console.log(dt.getMonth());
// console.log(dt.getFullYear());

// belirli gün ayarlama
// var dtA = new Date("8/24/2010");
// var dtB = new Date(2010,7,24,14,50,11);
// console.log(dtA)
// console.log(dtB)

var dtC = new Date("1/1/1990");
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC);


var start = new Date("1/1/1990");
var end = new Date("1/1/1992");

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye  / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log("milisecon :"+ milisecond);
console.log("saniye :"+ saniye);
console.log("dakika :"+ dakika);
console.log("saat :"+ saat)
console.log("gün :"+ gun)

