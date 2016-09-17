/*###Задача 2
 Создайте класс User, который наследует от класса Person (из предыдущей задачи),
 со свойствами signUpDate(дата регистрации, по умолчанию 0) и id.
 Создайте несколько экземпляров класса и запишите их в массив users.
 */
import React from 'react';
import ReactDOM from 'react-dom';
class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;

    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    sayHi() {
        alert('Hello, my name is' + this.fullName)
    }
}
class User extends Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male", signUpDate = 0, id) {
        super(firstName, lastName, age, gender)
        this.signUpDate = signUpDate;
        this.id = id;

    }
}
let user1 = new User("Ihor","Olesandrov", 27, "Male",25, 0);
let user2 = new User("John","Simons", 20, "Male",22, 1);
let user3 = new User("Olha","Olesandrov", 47, "Female",55, 2);
let user4 = new User("Oleh","Ivanov", 56, "Male",223, 3);

let users = [user1, user2, user3, user4];

console.log(users);