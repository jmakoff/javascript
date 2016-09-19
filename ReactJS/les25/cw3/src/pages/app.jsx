var React = require('react');

var appStore = require('../stores/appStore.js');
var appActions = require('../action/appActions.js');

// flux Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            val1: '',
            val2: '',
            result: ""
        }
this.inputHandler = this.inputHandler.bind(this)
        this.plusHandler = this.plusHandler.bind(this)
        this.minusHandler = this.minusHandler.bind(this)
        this.mulHandler = this.mulHandler.bind(this)
        this.divHandler = this.divHandler.bind(this)
    }

    componentWillMount() {

        // создание обработчика flux actions / Действий
        appStore.on('plus', () => {
            this.setState({result : appStore.sum()})
            }
        )

        appStore.on('minus', () => {
                this.setState({result: appStore.minus()})
            }
        )

        appStore.on('mul', () => {
            this.setState({result: appStore.mul()})
            }
        )
        appStore.on('div', () => {
                this.setState({result: appStore.div()})
            })
        appStore.on('valueEmitter', () => {

        })

    }
    inputHandler(e, destNum) {
        appActions.setValue(e.target.value, destNum);
        e.target.value = appStore.getInputValue(destNum);
    }



    plusHandler() {
        appActions.plus();
    }

    minusHandler() {
        appActions.minus();
    }

    mulHandler() {
        appActions.multiple();
    }

    divHandler() {
        appActions.divide();
    }

    render() {
        return (
            <div >
                <input id="val1" onChange={(event) => this.inputHandler(event, 'val1')}/>
                <input id="val2" onChange={(event) => this.inputHandler(event, 'val2')}/>
                <h3>Result is {this.state.result}</h3>

                <button onClick={this.plusHandler}>Plus(+)</button>
                <button onClick={this.minusHandler}>Minus(-)</button>
                <button onClick={this.mulHandler}>Multiple(*)</button>
                <button onClick={this.divHandler}>divide(-)</button>
            </div>
        )
    }
}

module.exports = App;