# Opgave 1

1.1. Opret en funktion kaldet sammenlign med 2 parametre – et kaldet tekst1 og en anden kaldet tekst2, som returnerer true,
hvis de to tekster er ens - og false, hvis de er forskellige.
``` javascript
function sammenlign(tekst1, tekst2) {
    if (tekst1 == tekst2) {
        console.log("true");
    } else {
        console.log(false);
    }
}

sammenlign("hej", "hej");
```

1.2. Opret en formular hvor man kan skrive to tekster - og teste ved at klikke på en knap. Resultatet skal udskrives med en sigende tekst.

HTML:
``` HTML
<form action="" id="formen">
        <p>Tekst 1:</p>
        <textarea rows="4" cols="50" id="tekstet"></textarea>
        <p>Tekst 2:</p>
        <textarea rows="4" cols="50" id="tekstto"></textarea>
    </form>
    <p></p>
    <button id="testbtn">Test</button>
    <p id="content"></p>
```

Javascript:
``` javascript
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
``` 

2.1. Opret en funktion kaldet adresselabel, som modtager informationer om en persons fornavn, efternavn, vej, husnummer, postnummer og bynavn. Funktionen skal returnere en præsentabel tekst-streng formateret med html og evt. CSS.

2.2. Brug funktionen til at præsentere indholdet på siden.
``` javascript
function adresselabel(fornavn, efternavn, vej, husnummer, postnummer, bynavn) {
    document.getElementById('content').innerHTML += `Fornavn: ${fornavn} <br> Efternavn: ${efternavn} <br> Vej: ${vej} <br> Husnummer: ${husnummer} <br> Postnummer: ${postnummer} <br> Bynavn: ${bynavn}`;
}

adresselabel("Lars", "Hansen", "Kildevej", 10, 2680, "Solrød Strand");
```

3.1. Opret en funktion kaldet prisMedMoms, som modtager en pris uden moms og returnerer prisen med moms.

3.2. Test funktionen med prisen 200 kr. Og derefter 800 kr. Resultatet skal udskrives på html - siden.
``` javascript
let moms = 1.25;

function prisMedMoms(pris) {
    document.getElementById('content').innerHTML += `
    Pris uden moms: ${pris} - 
    Pris med mom: ${pris * moms} <br>`;
}
prisMedMoms(200);
prisMedMoms(800);
```

4.1. Opret en funktion kaldet hentAreal, som udskriver arealet af 3 x 2 meter.

4.2. Test funktionen med en udskrift på html-siden.
``` javascript
function hentAreal(højde, grundlinje) {
    document.getElementById('content').innerHTML += `
    Højde: ${højde} <br>
    Grundlinje: ${grundlinje} <br>
    Areal: ${højde * grundlinje} <br>`;
}
hentAreal(3, 2);
```


# ARRAY

5.1. Opret et array bestående af de 7 ugedage.
``` javascript
var ugedage = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag"]
```

5.2. Udskriv alle ugedage med en for-løkke.
``` javascript
for (i = 0; i < ugedage.length; i++) {
    document.getElementById('content').innerHTML += `${ugedage[i]} <br>`;
}
```

5.3. Udskriv alle ugedage med en forEach.
``` javascript
ugedage.forEach(function (output) {
    document.getElementById('content').innerHTML += `${output} <br>`;
});
```

5.4. Udskriv alle ugedage i omvendt rækkefølge.
``` javascript
function backwards() {
    ugedage.reverse();
    document.getElementById("content").innerHTML += ugedage;
}
backwards();
```

5.5. Udskriv ugedagene i tilfældig rækkefølge.
``` javascript
function random() {
    ugedage.sort(function (a, b) {
        return 0.7 - Math.random()
    });
    document.getElementById("content").innerHTML = ugedage;
}
random();
```

5.6. Udskriv ugedagen i dag (måske du har brug for dette link: http://javascript.info/date)
``` javascript
function random() {
    var dato = new Date();
    document.getElementById("content").innerHTML += "Hvilken dag er det idag? det er: " + dato.getDay();
    document.getElementById("content").innerHTML += '<br>' + dato;
}
random();
```


# LØKKER

6.1. Opret et select html-element, som viser en liste med tallene 1-31.

6.2. Opret et select html-element, som viser alle 12 månedsnavne og deres index som value.

6.3. Opret et select html-element, som viser nuværende årstal og 30 år tilbage.

6.4. Udskriv alle tal mellem 1–100 som er delelige med 7.
``` javascript
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
```


# Variabler

7.1. Opret en variabel kaldet heltal og tildel den en værdig af heltal - udskriv den herefter med console.log.
``` javascript
var heltal = 10;
console.log(heltal);
```

7.2. Opret en variabel kaldet decimaltal og tildel den en tal - værdig med 3 decimaler - udskriv den herefter med 2 decimaler via console.log
``` javascript
var decimaltal = 4.321;
console.log(decimaltal.toFixed(2));
```

7.3. Opret en variabel kaldet Dato og tildel den værdien af dags dato - udskriv den herefter med console.log.
``` javascript
var dato = new Date();
var dag = dato.getDate();
var mnd = dato.getMonth();
var aar = dato.getFullYear();
console.log(dag, mnd, aar);
```

7.4. Opret en variabel kaldet Ok og tildel den en værdi af typen boolean - udskriv den herefter med console.log.
``` javascript

```