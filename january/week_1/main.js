//----------------------------------------------#DAY 01 - INTO CLASS -------------------------------------------
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
myCar1 = new Car("Tesla", "Model S", 2022);
myCar2 = new Car("Nissan", "Leaf", 2024);

document.getElementById("into-class").innerHTML += "<br>My Car 1 is " + myCar1.age() + " years old";
document.getElementById("into-class").innerHTML += "<br>My Car 2 is " + myCar2.age() + " years old";


// TESTING KNOWLEDGE

// class Pais {
//     constructor(nome, continente, capital, independecia) {
//         this.nome = nome;
//         this.continente = continente;
//         this.capital = capital;
//         this.independecia = independecia;
//     }

//     isIndependente() {
//         return this.independecia - year;
//     }
// }

// const date = new Date;
// let year = date.getFullYear();

// const brasil = new Pais("Brasil", "America do Sul", "Rio de Janeiro", 1870);
// const angola = new Pais("Angola", "África", "Luanda", 1975);

// document.getElementById("into-class").innerHTML = brasil.nome + " Tem " + brasil.isIndependente() + " Anos de Indepencia " + " & " +
// angola.nome + " Tem " +angola.isIndependente() + " Anos de Indepencia";


//----------------------------------------------#DAY 02 - CLASS INHERITANCE-------------------------------------------

//Create new class that inherits from Car class

class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity;
    }

    getBatteryPercentage() {
        return (this.batteryCapacity / 100) * 100;
    }
}

//Using class ElectricCar

const myElectricCar1 = new ElectricCar("Tesla", "Model S", 2022, 100);
const myElectricCar2 = new ElectricCar("Nissan", "Leaf", 2024, 80);

document.getElementById("class-inheritance").innerHTML += "<br>My Electric Car 1 has " + myElectricCar1.getBatteryPercentage() + "% Battery";
document.getElementById("class-inheritance").innerHTML += "<br>My Electric Car 2 has " + myElectricCar2.getBatteryPercentage() + "% Battery";

//----------------------------------------------#DAY 03 - STATIC METHODS-------------------------------------------

//Create static method in Car class

class Certifications {
    constructor (name, type, time) {
        this.name = name;
        this.type = type;
        this.time = time;
    }
    static getCertification(name) {
        return Certifications.allCertifications.find(certification => certification.name === name);
    }
}

Certifications.allCertifications = [
    new Certifications("B2B", "Motorcycle", 10),
    new Certifications("B3", "Motorcycle", 15),
    new Certifications("B3B", "Motorcycle", 20)
];

//Using static method

const certification1 = Certifications.getCertification("B3B");
document.getElementById("class-static-method").innerHTML += "<br>B3B certification is " + certification1.time + " years old";