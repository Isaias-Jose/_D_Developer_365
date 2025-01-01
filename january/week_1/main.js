//Create class Car
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    age () {
        const currentYear = new Date();
        return currentYear.getFullYear() - this.year;
    }
}

//Using class Car
myCar1 = new Car("Mercedes", "VX", 2022);
myCar2 = new Car("Testa", "XpaceOne", 2024);

//document.getElementById("into-class").innerHTML = myCar1.make + " " + myCar2.make;

document.getElementById("into-class").innerHTML = "My Car 1 is " + myCar1.age() + " years old";