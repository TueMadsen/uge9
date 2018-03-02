//OPG 5 ARRAY 
//  OPG 5.1
var ugedage = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag"]

// OPG 5.2.
// for (i = 0; i < ugedage.length; i++) {
//     document.getElementById('content').innerHTML += `${ugedage[i]} <br>`;
// }

//OPG 5.3.
// ugedage.forEach(function (output) {
//     document.getElementById('content').innerHTML += `${output} <br>`;
// });

// OPG 5.4.
// function backwards() {
//     ugedage.reverse();
//     document.getElementById("content").innerHTML += ugedage;
// }
// backwards();

// OPG 5.5.

    ugedage.sort(function (a, b) {
        return 0.7 - Math.random()
    });
    document.getElementById("content").innerHTML = ugedage;


//OPG 5.6
// function idag() {
//     var dato = new Date();
//     document.getElementById("content").innerHTML += "Hvilken dag er det idag? det er: " + ugedage[dato.getDay() - 1];
//     document.getElementById("content").innerHTML += '<br>' + dato;
// }
// idag();