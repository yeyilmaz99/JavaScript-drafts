// Scopes


// GLOBAL SCOPES
var name = "Yunus";
var age = 25
function logName() {
    var name = "yagmur"
    console.log("function scope", name)
}


if(true){
    var age = 22
    console.log("block scope",name, age);
}

console.log(age);

logName();
console.log(name);



// LOCAL SCOPES


// FONKSİYONLAR KENDİ SCOPELARINI OLUŞTURUR.
// BLOCKLAR YENİ SCOPE OLUŞTURMAZ.

console.log("**********************");

if (true){
    var model = "opel";
    let year = 2020;
    const color = "red";
    console.log("block scope with es6", model, year, color);
}

// console.log("block scope with es6", model, year, color); hata verir!

// ES6 İLE GELEN LET VE CONST BLOCK SCOPE OLUŞTURUR

var i= 1;

for(let i =0; i<10; i++){
    console.log("i",i);
}
console.log(i);
