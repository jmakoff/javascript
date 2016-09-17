/*###Задача 3
 Создайте React компонент(используя ES6 синтаксис),
 который выведет на экран в виде таблицы массив users из предыдущей задачи.
 При клике по каждой ячейке таблицы, содержащей имя плоьзователя,
 должен запускаться метод sayHi соотстветствующего элемента массива users.

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
        alert('Hello, my name is ' + this.fullName)
    }
}
class User extends Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male", signUpDate = 0, id) {
        super(firstName, lastName, age, gender)
        this.signUpDate = signUpDate;
        this.id = id;

    }
}
let user1 = new User("Ihor", "Olesandrov", 27, "Male", 25, 0);
let user2 = new User("John", "Simons", 20, "Male", 22, 1);
let user3 = new User("Olha", "Olesandrov", 47, "Female", 55, 2);
let user4 = new User("Oleh", "Ivanov", 56, "Male", 223, 3);

var users = [user1, user2, user3, user4];
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let table = this.props.data.map((elem, index) => {
            let row = Object.keys(elem).map((prop, index) => {
                if (prop === 'firstName') {
                    return <td key={index} onClick={() => {elem.sayHi()}} style={{cursor: 'pointer'}}>{elem[prop]}</td>
                }
                return <td key={index}>{elem[prop]}</td>
            });
            return <tr key={index}>{row}</tr>
        });

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>First name </th>
                    <th>Last name </th>
                    <th>Age </th>
                    <th>Gender </th>
                    <th>Sign up date </th>
                    <th>Id </th>
                </tr>
                </thead>
                <tbody>{table}</tbody>
            </table>
        );
    }
}


ReactDOM.render(<App data={users} />, document.getElementById('output'));
console.log(users);