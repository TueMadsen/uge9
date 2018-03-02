//   OPG 8.1 & 8.2
let jsonobject = {
    
        "upcommingstars":[
            {"fornavn": "Jimi", "efternavn": "Hendrix", "adresse": "pulsen 8"},
            {"fornavn": "Janis", "efternavn": "Joplin", "adresse": "pulsen 10"},
            {"fornavn": "Jim", "efternavn": "Morrison", "adresse": "pulsen 12"}
            
        ]
    }
   //dette er en sti som gør du kan kalde på objekterne 
    var person = jsonobject.upcommingstars[0].fornavn
    var person1 = jsonobject.upcommingstars[1].fornavn
    var person2 = jsonobject.upcommingstars[2].fornavn

 //getelementbyid kalder på min div boks som hedder content og innerhtml fortæller hvad der skal vises i divboksen
    document.getElementById("content").innerHTML += person + " ";
    document.getElementById("content").innerHTML += person1 + " " ;
    document.getElementById("content").innerHTML += person2 + " " ;
// + " " skaber et mellemrum imellem objekterne.

console.log (person, person1)
// console.log (jsonobject.upcommingstars[0].efternavn)

