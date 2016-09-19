import dispatcher from '../dispatcher'

// flux Actions / Действия — хелперы, упрощающие передачу данных Диспетчеру 

function changeClass() {
    dispatcher.dispatch({ type: 'CLASS'})
}

export {changeClass}