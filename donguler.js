// Loops/Döngüler

//for loop

// for(let i=0; i<=10; i++){
//     if(i==3){
//         console.log("en sevdiğim rakam" + " " +i);
//         continue;
//     }
//     if(i==6){
//         console.log("en sevmediğim rakam" + " " +i)
//         break;
//     }



//     console.log(i)
// }

// while loop

// for(let i=0; i<10 ; i++){
//     console.log(i);
// }

// let = i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

//do-While loop

// let= i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10)

// let sonuc = 1;
// for( let i =10; i>0; i--){
//     if(i%2==1){
//         sonuc*=i;
//     }
// }
// console.log(sonuc)


// for(let i = 0; i<10; i++){

//     for(let j=0; j<10; j++){
//         console.log("i: " +i + " " +"j " +j)
//     }


// let val = "\n"
// for(let i = 0; i<10; i++){
//     for(let j=0; j<10; j++){
//       val+="* ";
//     }
//     val+="\n";
// }
// console.log(val)


let cars = ["Bmw", "Toyota", "Mercedes"];
let people= [
    {firstName : "yunus", lastName: "yilmaz", age: 22},
    {firstName : "mustafa", lastName: "yilmaz", age: 22},
    {firstName : "bahar", lastName: "yilmaz", age: 22},
];


// arrays

// for(let i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }


// objects
// for(let i=0; i<people.length; i++){
//     console.log(people[i].firstName);
// }



// for-in

//arrays
// for( let i in cars){
//     console.log("index :" + i +" " + "value :" +cars[i]);
// } 

//objects

// for( let i in people){
//     console.log("index :" + i +" " + "value :" +people[i].firstName);
// } 



// foreach

//arrays
// cars.forEach(function (item) {
//     console.log(item)
// })

//objects
// people.forEach(function (item) {
//     console.log(item.firstName)
// })


// map : returns an array


// let val = people.map(function(item){
//     return item.firstName+ " " + item.lastName
// });

// console.log(val)

// let numbers = [1,5,6,8,10];

// let num = numbers.map(function name(n) {
//     return n*n;
// });
// console.log(num)