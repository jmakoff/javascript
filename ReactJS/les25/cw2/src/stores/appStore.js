import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

// flux Stores / Хранилища — контейнеры для состояния приложения и логики в обработчиках, зарегистрированных в Диспетчере

class AppStore extends EventEmitter {
    constructor() {
        super()

        this.timeValue = 0;
        this.enabled = false;

        this.tick = this.tick.bind(this);
    }

    getTimeValue() {
        return this.timeValue;
    }

    tick() {
        this.timeValue += 1;
    }


    enableTimer() {
        this.enabled = true;
        this.timer = setInterval(this.tick, 1000);
    }

    disableTimer() {
        this.enabled = false;
        clearInterval(this.timer);
    }


    startCount() {
        if (this.enabled) return;

        this.enableTimer();
    }

    stopCount() {
        this.disableTimer();
    }

    resetCount() {
        this.disableTimer();
        this.timeValue = 0;
    }


    // обработчик actions
    handleActions(action) {
        var emitter;
        switch (action.type) {
            case "START": {
                this.emit('startCount');
                break;
            }

            case "STOP": {
                this.emit('stopCount');
                break;
            }

            case "RESET": {
                this.emit('resetCount');
                break;
            }
        }
    }
}

const appStore = new AppStore;
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this
dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;