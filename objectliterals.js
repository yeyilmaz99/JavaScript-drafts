// object literals

// let person = {
//     firstName : "Yunus Emre",
//     lastName : "Yilmaz",
//     age : 22 ,
//     school : "university",
//     hobbies : ["music","game"],
//     address : {
//         city: "eskisehir",
//         country: "Turkey"
//     },
//     getBirthYear : function () {
//         return 2021-this.age;
//     }

// };

// val = person;
// val =person.firstName;
// val= person.lastName
// val = person["firstName"];
// val = person.age;
// val =person.hobbies;
// val =person.hobbies[0];
// val =person.hobbies.length;
// val =person.address;
// val =person.address.city;
// val = person.address["country"]
// val = person.getBirthYear()

// console.log(val);
// console.log(typeof person);



// let people = [
//     {firstName: "Yunus Emre", lastName: "Yilmaz", age: 22, school: "university"},
//     {firstName: "Mustafa", lastName: "Yilmaz", age: 27, school: "university"},
//     {firstName: "Ayse", lastName: "Yilmaz", age: 32, school: "university"},
//     {firstName: "Bahar", lastName: "Yilmaz", age: 29, school: "university"},
//     {firstName: "Yagmur", lastName: "Yilmaz", age: 21, school: "university"}    
//             ]

// val = people[2]
// val = people[2].firstName

// for(let i=0; i<people.length; i++){
//     console.log(people[i].firstName)
// }


// console.log(val);
// console.log(typeof people)


var aracBilgileri = [
    {
        id: "bmw111",
        model: "bmw116d",
        yil: 2015,
        renk: "Beyaz",
        servisKayitlari: [
            {
                id: "bmw111_1", tarih: "30.06.2016", km: 13000, toplamUcret: 900,
                servisDetayi: [
                    {id: "bmw111_1_1", aciklama: " yag degisimi", ucret: 300,},
                    {id: "bmw111_1_2", aciklama: " filtre degisimi", ucret: 300,},
                    {id: "bmw111_1_3", aciklama: " fren hidroligi", ucret: 300}
                ]
            },
            {
                id: "bmw111_2", tarih: "30.06.2017", km: 19000, toplamUcret: 1800,
                servisDetayi: [
                    { id: "bmw111_2_1", aciklama: " yag degisimi", ucret: 350, },
                    { id: "bmw111_2_2", aciklama: " filtre degisimi", ucret: 350, },
                    { id: "bmw111_2_3", aciklama: " fren hidroligi", ucret: 300, },
                    { id: "bmw111_2_4", aciklama: " balata degisimi", ucret: 800 }
                ]
            },

        ]
    },
    {
        id: "bmw112",
        model: "bmw116d",
        yil: 2017,
        renk: "Siyah",
        servisKayitlari: [
            {
                id: "bmw112_1", tarih: "30.06.2018", km: 20000, toplamUcret: 900,
                servisDetayi: [
                    {id: "bmw112_1_1", aciklama: " yag degisimi", ucret: 300,},
                    {id: "bmw112_1_2", aciklama: " filtre degisimi", ucret: 300,},
                    {id: "bmw112_1_3", aciklama: " fren hidroligi", ucret: 300}
                ]
            },
            {
                id: "bmw112_2", tarih: "30.06.2018", km: 25000, toplamUcret: 1800,
                servisDetayi: [
                    { id: "bmw112_2_1", aciklama: " yag degisimi", ucret: 350, },
                    { id: "bmw112_2_2", aciklama: " filtre degisimi", ucret: 350, },
                    { id: "bmw112_2_3", aciklama: " fren hidroligi", ucret: 300, },
                    { id: "bmw112_2_4", aciklama: " balata degisimi", ucret: 800 }
                ]
            },

        ]
    },
    {
        id: "bmw113",
        model: "bmw116d",
        yil: 2019,
        renk: "Gri",
        servisKayitlari: [
            {
                id: "bmw113_1", tarih: "30.06.2018", km: 27000, toplamUcret: 900,
                servisDetayi: [
                    {id: "bmw113_1_1", aciklama: " yag degisimi", ucret: 300,},
                    {id: "bmw113_1_2", aciklama: " filtre degisimi", ucret: 300,},
                    {id: "bmw113_1_3", aciklama: " fren hidroligi", ucret: 300}
                ]
            },
            {
                id: "bmw113_2", tarih: "30.06.2018", km: 29000, toplamUcret: 1800,
                servisDetayi: [
                    { id: "bmw113_2_1", aciklama: " yag degisimi", ucret: 350, },
                    { id: "bmw113_2_2", aciklama: " filtre degisimi", ucret: 350, },
                    { id: "bmw113_2_3", aciklama: " fren hidroligi", ucret: 300, },
                    { id: "bmw113_2_4", aciklama: " balata degisimi", ucret: 800 }
                ]
            },

        ]
    },
]

console.log(aracBilgileri[0]);
// console.log(aracBilgileri[0].id);
// console.log(aracBilgileri[0].model);
// console.log(aracBilgileri[0].renk);
// console.log(aracBilgileri[0].yil);
// console.log(aracBilgileri[0].servisKayitlari);
// console.log(aracBilgileri[0].servisKayitlari[0].servisDetayi);
// console.log(aracBilgileri[0].servisKayitlari[1].servisDetayi);




// console.log(aracBilgileri[1]);
// console.log(aracBilgileri[1].id)
// console.log(aracBilgileri[2]);
// console.log(aracBilgileri[2].id)