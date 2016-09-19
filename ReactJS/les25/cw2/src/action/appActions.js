import dispatcher from '../dispatcher.js'

// flux Actions / Действия — хелперы, упрощающие передачу данных Диспетчеру

function startCount() {
    dispatcher.dispatch({ type: 'START'})
}

function stopCount() {
    dispatcher.dispatch({ type: 'STOP'})
}

function resetCount() {
    dispatcher.dispatch({ type: 'RESET'})
}


export {startCount, stopCount, resetCount}