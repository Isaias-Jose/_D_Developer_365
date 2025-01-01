//Create class Car
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

//Using class Car
myCar1 = new Car("Mercedes", "VX", 2022);
myCar2 = new Car("Testa", "XpaceOne", 2024);

document.getElementById("into-class").innerHTML = myCar1.make + " " + myCar2.make;