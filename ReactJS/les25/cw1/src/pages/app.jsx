var React = require('react');

var appStore = require('../Stores/appStore.js');
var appActions = require('../actions/appActions.js');

// flux Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства

class App extends React.Component{
    constructor() {
        super()

        this.state = {
            styleClass: appStore.getStyleClass()
        }

        this.classHandler = this.classHandler.bind(this)
    }

    componentWillMount() {
        // создание обработчика flux actions / Действий
        appStore.on('classChange', () => {
                this.setState({ styleClass: appStore.addClass() })
            }
        )
    }

    classHandler() {
        appActions.changeClass();
    }

    render() {
        return (
            <div className="panel well">
                <div className={this.state.styleClass}>My Element</div>
                <button className="btn-lg btn-success btn" onClick={this.classHandler}>Click me!</button>
            </div>
        )}
}

module.exports = App; 