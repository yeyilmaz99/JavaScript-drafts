// date object

let d = new Date();
let birthDay = new Date(1999,1,17);

// set methods

d.setFullYear(2021);
d.setMonth(6);
d.setDate(20);


// get methods


console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());



console.log(d.getFullYear()-birthDay.getFullYear())