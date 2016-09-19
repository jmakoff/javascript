import dispatcher from '../dispatcher';

function createItem(item) {
    dispatcher.dispatch({type: 'CREATE_ITEM', item})
}

function removeItem(id) {
    dispatcher.dispatch({type: 'DELETE_ITEM', id})
}
function filterItems(search) {
    dispatcher.dispatch({type: 'FILTER_ITEMS', search})
}
export {createItem, removeItem, filterItems};