
// Operatörler

let val;

const a=10;
const b=5;
const c = 5;
let d = 3;

// 1- Aritmetik Operatörler

val = a+b;
val= a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++; // --3
val = ++d;// --4
val = d--; 
val = --d;
// 2- Atama Operatörleri

val = a;
val +=a; // val = val+a
val -=a; // val = val-a
val *=a; // val = val*a
val /=a; // val = val/a
val %=a; // val = val%a


// 3- Karşılaştırma Operatörleri

val = a==b;  // -false
val = b==c;  // -true
val = a===b; // -false
val = b===c; // -true // değer kontrolü ve type
val = a!=b;
val = a!==b;
val = a > b;


// 4- Mantıksal Operatörler

// && (and)
 // true && true => true
  // false && true => false
   // false && false => false
val = (a>b) && (a>c)


// || (or)

 // true && true => true
  // false && true => true
   // false && false => false

val = (a>b) || (a<c)



// ! (not)

// !true => false
// !false => true


val = !(a>b)



console.log(val)
console.log(typeof val)