import React from 'react';
var router = require('react-router');

var Link = router.Link;
var browserHistory = router.browserHistory;


export default class tableView extends React.Component {
    render() {



        return (
            <div>
                <h3>This is table view!!!</h3>
                <table>

                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th> Gender</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.route.users.map((user, item) => {
                        return <tr key={item}>
                            <td>
                                <Link to={{ pathname: `listView/${user.id}`, query:
                                {first_name: user.first_name, last_name: user.last_name, email: user.email,  gender: user.gender,  ip_address: user.ip_address} }}>{user.first_name}</Link>
                            </td>
                            <td>{user.last_name}</td>
                        </tr>;
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
} 
