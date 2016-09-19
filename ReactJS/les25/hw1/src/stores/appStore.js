import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.items = [
            {name: 'Example ', id: 1}
        ]
    }

    getItems() {
        return this.items;
    }

    createItem(item) {
        this.items.push(item);
    }

    removeItem(id) {
        this.items = this.items.filter((item) => {
            return item.id != id;
        });
    }

    handleActions(action) {
        switch (action.type) {
            case 'CREATE_ITEM': {
                this.createItem(action.item);
                this.emit('itemsChange');
                break;
            }
            case 'DELETE_ITEM': {
                this.removeItem(action.id);
                this.emit('itemsChange');
                break;
            }
        }
    }
}

const appStore = new AppStore;

dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;