import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

// flux Stores / Хранилища — контейнеры для состояния приложения и логики в обработчиках, зарегистрированных в Диспетчере

class AppStore extends EventEmitter {
    constructor() {
        super()
        this.styleClass = 'block';
    }

    getStyleClass() {
        return this.styleClass
    }

    addClass() {
        if (this.styleClass == 'block2') {
            this.styleClass = 'block';
            return this.styleClass
        } else {
            this.styleClass = 'block2'
            return this.styleClass
        }
    }

    // обработчик actions
    handleActions(action) {
        switch (action.type) {
            case "CLASS": {
                this.emit('classChange')
                console.log(this.styleClass);
                break;
            }
        }
    }
}

const appStore = new AppStore;
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this
dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore; 