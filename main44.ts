function storeCarInfo(manufacturer, modelName, ...options) {
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Assign additional options to the carInfo Object
    for (let option of options) {
        for (let key in option) {
            carInfo[key] = option[key];
        }
    }
    return carInfo;
}

// Call the function with required information and two other name-value pairs
let car = storeCarInfo("Toyota", "Camry", { color: "red" }, { year: 2022 });

// Print the Object returned by the function
console.log(car);
