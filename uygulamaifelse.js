// var trafigeCikis = new Date("08/20/2020");
// trafigeCikis.setHours(0, 0, 0, 0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun = Math.floor(trafiktekiMs / (1000 * 60 * 60 * 24));

// console.log(trafiktekiGun)

// if (trafiktekiGun <= 365) {
//     alert("1.Bakım Süresi Geldi!");
// } else if (trafiktekiGun > 365 && trafiktekiGun <= 365*2) {
//     alert("2.Bakım Süresi Geldi!");
// } else if(trafiktekiGun >= 365*2 && trafiktekiGun <= 365*3) {
//     alert("3.Bakım Süresi Geldi")
// } else{
//     alert("bilinmeyen süre")
// }


var result = prompt("who's there?");

if(result == "cancel"){
    alert("cancelled");
}else if(result == "admin"){
    var password = prompt("password?");
    if(password == "cancel"){
        alert("cancelled")
    }else if(password == "themaster"){
        alert("password is true, Welcome Admin")
    }else{
        alert("password is wrong, I don't Know You!")
    }
}else{
    alert("I don't Know You!");
}