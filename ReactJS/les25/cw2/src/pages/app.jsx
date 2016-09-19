var React = require('react');

var appStore = require('../stores/appStore.js');
var appActions = require('../action/appActions.js');

// flux Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства

class App extends React.Component{
    constructor() {
        super()

        this.state = {
            timeValue: 0
        }

        this.startHandler = this.startHandler.bind(this)
        this.stopHandler = this.stopHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this)
        this.setTimeValue = this.setTimeValue.bind(this)
    }

    componentWillMount() {
        var interval;
        // создание обработчика flux actions / Действий
        appStore.on('startCount', () => {
                appStore.startCount();
                interval = setInterval(this.setTimeValue, 1000);
            }
        )

        appStore.on('stopCount', () => {
                appStore.stopCount();
                clearInterval(interval);
                this.setTimeValue();
            }
        )

        appStore.on('resetCount', () => {
                appStore.resetCount();
                clearInterval(interval);
                this.setTimeValue();
            }
        )
    }

    setTimeValue() {
        this.setState({ timeValue: appStore.getTimeValue() });
    }

    componentDidMount() {
        appActions.startCount();
    }

    startHandler() {
        appActions.startCount();
    }

    stopHandler() {
        appActions.stopCount();
    }

    resetHandler() {
        appActions.resetCount();
    }

    render() {
        return (
            <div >
                <h1>Timer:{this.state.timeValue} sec</h1>

                <button  onClick={this.startHandler}>Start</button>
                <button  onClick={this.stopHandler}>Stop</button>
                <button  onClick={this.resetHandler}>Reset</button>
            </div>
        )}
}

module.exports = App;