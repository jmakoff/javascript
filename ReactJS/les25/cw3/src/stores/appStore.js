import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

// flux Stores / Хранилища — контейнеры для состояния приложения и логики в обработчиках, зарегистрированных в Диспетчере

class AppStore extends EventEmitter {
    constructor() {
        super()


    }

    sum() {
        this.result = +this.val1 + +this.val2;
        return this.result;
    }

    minus() {
        this.res = this.result = +this.val1 - +this.val2;
        return this.res;
    }

    mul() {
        this.res = this.result = +this.val1 * +this.val2;
        return this.res;
    }

    div() {
        this.res = this.result = +this.val1 / +this.val2;
        return this.res;
    }
    setValue(value, destNum) {
        var previousValue = this[destNum];
        var currentValue = value;
        var testVal = /^[0-9]*$/;

        if (currentValue.search(testVal) == -1) {
            value = previousValue;
            return;
        }

        this[destNum] = value;
    }

    getInputValue(destNum) {
        return this[destNum];
    }


    // обработчик actions
    handleActions(action) {

        switch (action.type) {
            case "PLUS": {
                this.emit('plus');
                break;
            }

            case "MINUS": {
                this.emit('minus');
                break;
            }

            case "MUL": {
                this.emit('mul');
                break;
            }
            case "DIV": {
                this.emit('div');
                break;
            }
            case "VALUE": {
                this.setValue(action.value, action.destNum);
                this.emit('valueEmitter');
                break;
            }

        }
    }
}

const appStore = new AppStore;
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this
dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;