import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../components/component.jsx';
import * as actions from '../actions/actions.js';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="panel well">
                <Component text={this.props.text} handler={this.props.changeText}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        text: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeText: actions.changeText
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
