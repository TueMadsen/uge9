//OPG 4.1. + 4.2.
function hentAreal(højde, grundlinje) {
    document.getElementById('content').innerHTML += `
    Højde: ${højde} <br>
    Grundlinje: ${grundlinje} <br>
    Areal: ${højde * grundlinje} m²<br>`;
}
hentAreal(3, 2);