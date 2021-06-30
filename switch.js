// switch statements

// let category = "beyaz eşya";

// switch(category){
//     case "telefon":
//     console.log("telefon kategorisi");
//     break;
//     case "bilgisayar":
//         console.log("bilgisayar kategorisi");
//     default:
//         console.log("kategori bulunamadı!")
// }

// let day;
// let day1;

// switch (new Date().getDay()) {
//     case 0:
//         day = "Pazar";
//         break;
//     case 1:
//         day = "Pazartesi";
//         break;
//     case 2:
//         day = "Salı";
//         break;
//     case 3:
//         day = "Çarşamba";
//         break;
//     case 4:
//         day = "Perşembe";
//         break;
//     case 5:
//         day = "Cuma";
//         break;
//     case 6:
//         day = "Cumartesi";
//         break;
// }

// console.log("Bugün günlerden" + " " + day)

// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         day1 = "hafta sonu";
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         day1 = "hafta içi"
//         break;
// }
// console.log(day1)


const firstName = "Yunus";
const age = 20;
const isStudent = false;
const school = "university";
let ad = "yunus"

switch (true) {
    case age >= 0 && age <= 12:
        ad = "Yunus is child";
        break;
    case age >= 13 && age <= 19:
        ad = "Yunus is teenager";
        break;
    default:
        ad = "Yunus an adult"
        console.log(ad)
}






// if (age > 0 && age <= 12) {
//     console.log(firstName + " " + "is a child");
// } else if (age >= 13 && age <= 19) {
//     console.log(firstName + " " + "is a teenager");
// } else {
//     console.log(firstName + " " + "is an adult")
// }