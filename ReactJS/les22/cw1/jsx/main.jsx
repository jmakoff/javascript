var React = require('react');
var ReactDOM = require('react-dom');
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let {title, width, height} = options;
var Elem = React.createClass({
    render: function () {
        return (
            <div>
                <p>{width}</p>
                <h1>{title}</h1>
                <h2>{height}</h2>

            </div>
        )
    }
})
ReactDOM.render(<Elem/> ,document.getElementById('out'))
