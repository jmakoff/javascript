import dispatcher from '../dispatcher';

function createItem(item) {
    dispatcher.dispatch({type: 'CREATE_ITEM', item})
}

function removeItem(id) {
    dispatcher.dispatch({type: 'DELETE_ITEM', id})
}
export {createItem, removeItem};