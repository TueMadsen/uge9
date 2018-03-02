//OPG 1.1
function sammenlign(tekst1, tekst2) {
    if (tekst1 == tekst2) {
        console.log("true");
    } else {
        console.log(false);
    }
}

sammenlign("hej", "hej");


//-OPG 1.2
function sammenlign(tekst1, tekst2) {
    if (tekstet.value == tekstto.value) {
        console.log("true");
        document.getElementById('content').innerHTML += `<strong> ${tekstet.value} </strong> er det samme som <strong> ${tekstto.value} </strong> <br>`;
    } else {
        console.log(false);
        document.getElementById('content').innerHTML += `<strong> ${tekstet.value} </strong> er IKKE det samme som <strong> ${tekstto.value} </strong> <br>`;
    }

}

document.getElementById('testbtn').addEventListener('click', sammenlign);