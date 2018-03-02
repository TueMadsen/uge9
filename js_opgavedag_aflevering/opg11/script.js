//  OPG 11 & 12.

var index = 0;
var puzzlemaster = "";

document.getElementById("A").addEventListener("click", function(){ 
    document.getElementById("A").style.display = "none";


    //her
    pacifier("A")
})
document.getElementById("B").addEventListener("click", function(){ 
    document.getElementById("B").style.display = "none";

    pacifier("B")
})

document.getElementById("C").addEventListener("click", function(){ 
    document.getElementById("C").style.display = "none";

    pacifier("C")
})


pacifier("A")


function pacifier (bogstav){
    console.log(bogstav)

    puzzlemaster += bogstav;

    index ++
    if (index == 3){

        if (puzzlemaster == "CAB") {
            alert("You are the PUZZLEMASTER!")
        } 
        else {
            alert("FUK'U")
        }

    }
}









