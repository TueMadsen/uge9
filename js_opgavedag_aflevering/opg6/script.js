// OPG 6 LØKKER
let mnder = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];
selectTag();

function selectTag() {
    let dato = new Date();
    let select_et = document.createElement("select");
    let select_to = document.createElement("select");
    let select_tre = document.createElement("select");

    for (i = 0; i < 31; i++) {
        let option = document.createElement("option");
        option.value = i + 1;
        option.appendChild(document.createTextNode(i + 1));
        select_et.appendChild(option);
    }
    document.body.appendChild(select_et);
    document.body.insertBefore(select_et, document.body.firstChild);

    for (i = 0; i < 12; i++) {
        let option = document.createElement("option");
        option.value = i + 1;
        option.appendChild(document.createTextNode(mnder[i]));
        select_to.appendChild(option);
    }
    document.body.appendChild(select_to);
    document.body.insertBefore(select_to, document.body.firstChild);

    for (i = 0; i > -31; i--) {
        let option = document.createElement("option");
        option.value = i + 1;
        option.appendChild(document.createTextNode(dato.getFullYear() + i));
        select_tre.appendChild(option);
    }
    document.body.appendChild(select_tre);
    document.body.insertBefore(select_tre, document.body.firstChild);

    for (i = 0; i < 101; i++) {
        document.getElementById("content").innerHTML += i + " / 7 = " + i / 7 + '<br>';
    }
}