var hak =5;
var tahmin,sayac=0;
var sayi = Math.floor((Math.random()*10)+1);

console.log(sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt("1'den 10'a kadar sayı giriniz"));
    if(sayi == tahmin){
        alert("Tebrikler " +sayac +" " + "defada Bildiniz." + " " + "Puanınız :"+ " " + (100- (20)*(sayac-1)) );
        break;
    }else if(sayi > tahmin){
        alert("yukarı");
    }else{
        alert("asagı");
    }

    if(hak==0){
        alert("hakkınız bitti " +"sayı :" + sayi + " "+  "idi");
    }
}