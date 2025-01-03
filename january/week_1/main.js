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

document.getElementById("title-class-inheritance").innerHTML += "<br>My Electric Car 1 has " + myElectricCar1.getBatteryPercentage() + "% Battery";
document.getElementById("title-class-inheritance").innerHTML += "<br>My Electric Car 2 has " + myElectricCar2.getBatteryPercentage() + "% Battery";