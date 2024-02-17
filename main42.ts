function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
 function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
 let magicians = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

 let great_magicians = make_great([...magicians]);
 console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
