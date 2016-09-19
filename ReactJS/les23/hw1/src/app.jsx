import React from 'react'


let users = [
    {name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];

let additionaUsers = [
    {name:"John Doe",gender:"Male"},
    {name:"Anna Smith",gender:"Female"},
    {name:"Gary Miller",gender:"Male"},
    {name:"Lida Espinoza",gender:"Female"}];

export default class UserList extends React.Component {
    constructor(props) {
        super();
        this.state = {id: 0};

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        if (this.state.id > additionaUsers.length - 1) {
            alert('Добавлены все пользователи с дополнительного списка');
            return;
        }

        users.push(additionaUsers[this.state.id]);
        this.setState({id: this.state.id + 1});
    }

    render() {
        return (
            <div>
                <button onClick={() => this.clickHandler()} className="btn btn-default button">Add user</button>

                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Gender</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, item) => {
                        return <tr key={item}>
                            <td>{user.name}</td>
                            <td>{user.gender}</td>
                        </tr>;
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}
