// functions

// function yasHesapla(dogumYili) {
//     return 2021 - dogumYili;
// }

// let ageAda =  yasHesapla(1986);
// let ageYunus =  yasHesapla(1999);
// let ageYagmur =  yasHesapla(2000);

// console.log(ageAda);
// console.log(ageYagmur);
// console.log(ageYunus);



// function EmekliligeKacYilKaldi(dogumYili,isim) {
//     let yas = yasHesapla(dogumYili);
//     let emeklilik = 65 - yas;

//     if(emeklilik>0){
//         console.log(isim + " " +"emekli olmanıza " + emeklilik + " "+ "yıl kaldı.")
//     }else{
//         console.log("zaten emekli oldunuz")
//     }
// }
// EmekliligeKacYilKaldi(1999,"yunus");
// EmekliligeKacYilKaldi(2021,"yagmur");
// EmekliligeKacYilKaldi(1950,"bahar");

//function decloration

// function sum(a,b) {
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,20));

//function expressions

// const sum = function (a,b) {
//     if(typeof a ==="undefined"){a=0};
//     if(typeof b==="undefined"){b=0};
//     var c = a+b;
//     return c;
// }

// const sum = function (a=0,b=0) {
//     var c = a+b;
//     return c;
// }

// function sumAll() {
//     var total =0;
//     for(let i=0; i<arguments.length;i++){
//         total +=arguments[i];
//     }
//     return total;
// }

// console.log(sumAll(20,30,40,50));


// var hesap={
//     ad: "Yunus Emre",
//     soyAd: "Yilmaz",
//     hesapNo: 200,
//     bakiye: 5000,
// }
// var hesapNo= prompt("hesap no?");
// var hesapSifre= prompt("Sifre?");
// if(hesapNo == 200 && hesapSifre == 1071){
//     alert("ad: "+hesap.ad+"    " + "Soyad:"+hesap.soyAd+"    " +"hesap no: "+hesap.hesapNo+"     "+ "bakiye:"+hesap.bakiye)
//     var islem=prompt("İşleminiz Nedir?");
//     var tutar;
//      if(islem=="para çekme"){
//          var bakiye = hesap.bakiye
//          tutar = Number(prompt("çekmek istediğiniz tutar?"));
//          if (tutar<=hesap.bakiye){
//              console.log(tutar)
//              console.log(hesap.bakiye)
//          alert("paranız çekiliyor");
//          alert(`Kalan Bakiye : ${bakiye-tutar}`)
//      }else{
//          alert("Bakiye Yetersiz")
//          }
//      }else{
//          alert("Şu anda sadece para çekme işlemi yapılabilir")
//      }
 
// }else{
//         alert("kullanıcı bulunamadı");
        
//     }
 





var hesapA = {
    ad: "Yunus Emre",
    soyad:"Yilmaz",
    hesapNo: "200",
    bakiye: 5000,
    ekHesap: 1000
}
let hesapSifre;




function paraCekme(hesap,miktar) {
    hesapNo =prompt("Hoş Geldiniz Hesap No'nuzu Girin:");
    if(hesapNo ==200){
     hesapSifre= prompt("Şifrenizi Giriniz")}else{
        alert("Kullanıcı Bulunamadı");
    }if(hesapSifre ==1071){
        var islem= prompt(`Merhaba ${hesap.ad} ${hesap.soyad} Hesap Bilgileri: Hesap No: ${hesap.hesapNo} Hesap Bakiyesi: ${hesap.bakiye} İşleminiz Nedir?`);
    }else{
        alert("Parola Hatalı!")
    }if(islem == "para çekme"){
        miktar =prompt(`Çekmek İstediğiniz Tutar:`);
    }else{
        alert("Şu anda sadece para çekme işlemleri yapılmaktadır!")
        var islem= prompt(`Merhaba ${hesap.ad} ${hesap.soyad} Hesap Bilgileri: Hesap No: ${hesap.hesapNo} Hesap Bakiyesi: ${hesap.bakiye} İşleminiz Nedir?`);
    }if(islem == "para çekme"){
        miktar =prompt(`Çekmek İstediğiniz Tutar:`);
    }else{
        alert("Şu anda sadece para çekme işlemleri yapılmaktadır!")
    }if(miktar<hesap.bakiye){
        alert("Paranız Çekiliyor Lütfen Bekleyin...");
        alert(`İşleminiz Gerçekleşti Kalan Tutar ${hesap.bakiye-miktar}`)
    }else{
        alert("ÜZGÜNÜZ BAKİYE YETERSİZ")
        
    }
    
    console.log(miktar)
    console.log(hesap.bakiye)
}


paraCekme(hesapA,)