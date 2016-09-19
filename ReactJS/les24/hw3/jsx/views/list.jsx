var React = require('react');
var router = require('react-router');

var Link = router.Link;


class ListView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>ListView</h3>
                <ul>
                    {this.props.route.users.map((user, item) => {
                        return <li key={item}><Link to={{ pathname: `listView/${user.id}`, query:
                        {first_name: user.first_name, last_name: user.last_name, email: user.email,  gender: user.gender,  ip_address: user.ip_address} }}><span>{user.first_name}</span> <span>{user.last_name};</span></Link></li>;
                    })}
                </ul>
            </div>
        )}
}



module.exports = ListView;