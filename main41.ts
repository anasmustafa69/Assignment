function make_great(magicians )  {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

 
function show_magicians(magicians ) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

 make_great(magicians);

show_magicians(magicians);
