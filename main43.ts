function makeSandwich(...items )  {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!");
}

// Call the function with different number of arguments
makeSandwich("Cheese", "Tomato", "Lettuce", "Mayonnaise");
makeSandwich("Turkey", "Swiss Cheese", "Mustard");
makeSandwich("Peanut Butter", "Jelly");
