"use strict";
class Car {
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
    /*ya karny sy error solve ho gy hai zada tar error solve ho gaya hai and we use this. init*/
    drive() {
        console.log('The Car has Started driving');
    }
    stop() {
        console.log('The car has stopped');
    }
}
const car = new Car("honda", 2001, 780000);
const car2 = new Car("tesla", 2022, 1000000000);
car.model;
car2.drive();
//================================================================
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`What's for dinner?`);
    }
    speak() {
        console.log(`My name is ${this.name}, I am ${this.age} years old`);
    }
}
//extends is a kyword which is used to inheritance from parents class, then all the parents
class Chef extends Person {
    constructor(name, age, occupation) {
        //super is a methode which is used in constructor and always use at the first line , it intialize parent class hum this k bad super nahi use kar sakty,
        super(name, age);
        this.occupation = occupation;
    }
    speak() {
        console.log(`I am a ${this.occupation}`);
    }
    cook() {
        console.log(`I am cooking`);
    }
}
const chef = new Chef("Adeel", 35, "chef");
const chef1 = new Chef("naveed", 45, "programmer");
const person = new Person("Adeel", 25);
person.speak();
chef1.speak();
//=======================> example 2 <============================
class Myname {
    constructor(name, fatherName) {
        this.name = name;
        this.fatherName = fatherName;
    }
    break() {
        console.log("something went wrong");
    }
}
class Education extends Myname {
    constructor(name, fatherName, lastDegree) {
        super(name, fatherName);
        this.lastDegree = lastDegree;
    }
}
const mydetail = new Education("Adeel", "Ashraf", "intermediate");
console.log(mydetail.lastDegree);
console.log(mydetail.name);
mydetail.break();
// sab sy phele hum ny ak class bani hai or class ka name ka first alphabet always capital ,
