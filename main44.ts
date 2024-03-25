function storeCarInfo(manufacturer, modelName, ...options) {
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (let option of options) {
        for (let key in option) {
            carInfo[key] = option[key];
        }
    }
    return carInfo;
}

let car = storeCarInfo("Toyota", "Camry", { color: "red" }, { year: 2022 });
console.log(car);
