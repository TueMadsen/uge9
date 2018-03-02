//OPG 3.1. + 3.2.
let moms = 1.25;

function prisMedMoms(pris) {
    document.getElementById('content').innerHTML += `
    Pris uden moms: ${pris} - 
    Pris med mom: ${pris * moms} <br>`;
}
prisMedMoms(200);
prisMedMoms(800);