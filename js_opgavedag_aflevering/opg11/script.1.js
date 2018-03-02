var index = 0;
var puzzlemaster = "";

document.getElementById("A").addEventListener("click", function(){ 
    document.getElementById("A").style.display = "none";


    puzzlemaster += "A";
    console.log(puzzlemaster)

    index ++
    if (index == 3){

        if (puzzlemaster == "CAB") {
            alert("You are the PUZZLEMASTER!")
        } 
        else {
            alert("FUK'U")
        }

        // alert ("You go girl")
    }
})
document.getElementById("B").addEventListener("click", function(){ 
    document.getElementById("B").style.display = "none";

    puzzlemaster += "B";
    console.log(puzzlemaster)

    index ++
    if (index == 3){

        if (puzzlemaster == "CAB") {
            alert("You are the PUZZLEMASTER!")
        } 
        else {
            alert("FUK'U")
        }

        // alert ("You go girl")
    }
})

document.getElementById("C").addEventListener("click", function(){ 
    document.getElementById("C").style.display = "none";

    puzzlemaster += "C";
    console.log(puzzlemaster)

    index ++
    if (index == 3){

        if (puzzlemaster == "CAB") {
            alert("You are the PUZZLEMASTER!")
        } 
        else {
            alert("FUK'U")
        }
        // alert ("You go girl")
    }
})