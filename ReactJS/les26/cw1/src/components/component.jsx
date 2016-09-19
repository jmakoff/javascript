import React from 'react';

class Component extends React.Component{
    constructor(props) {
        super(props);
        this.inputChangeHandler =  this.inputChangeHandler.bind(this)
    }

    inputChangeHandler(e) {
        this.props.handler(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" value={this.props.text} onChange={this.inputChangeHandler} placeholder="Enter text"/>
                </div>
                <h1>Entered text: {this.props.text}</h1>
            </div>
        )
    }
}

export default Component;