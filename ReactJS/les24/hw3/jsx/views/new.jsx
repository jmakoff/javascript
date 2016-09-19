var React = require('react');

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let location = this.props.location;
        let first_name = location.query ? location.query.first_name : 'no data';
        let last_name = location.query ? location.query.last_name : 'no data';
        let email = location.query ? location.query.email : 'no data';
        let gender = location.query ? location.query.gender : 'no data';
        let ip = location.query ? location.query.ip_address : 'no data';

        return(
            <div>
                <h2>User Info</h2>

                <h4>ID: {this.props.params.id}</h4>
                <h4>First Name: {first_name}</h4>
                <h4>Last Name: {last_name}</h4>
                <h4>E-mail: {email}</h4>
                <h4>Gender: {gender}</h4>
                <h4>IP: {ip}</h4>
            </div>
        )}
}



module.exports = Item;