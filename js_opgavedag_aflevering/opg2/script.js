//OPG 2.1. + 2.2
function adresselabel(fornavn, efternavn, vej, husnummer, postnummer, bynavn) {
    document.getElementById('content').innerHTML += `Fornavn: ${fornavn} <br> Efternavn: ${efternavn} <br> Vej: ${vej} <br> Husnummer: ${husnummer} <br> Postnummer: ${postnummer} <br> Bynavn: ${bynavn}`;
}

adresselabel("Lars", "Hansen", "Kildevej", 10, 2680, "Solrød Strand");