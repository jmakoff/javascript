import dispatcher from '../dispatcher.js'

// flux Actions / Действия — хелперы, упрощающие передачу данных Диспетчеру

function plus() {
    dispatcher.dispatch({ type: 'PLUS'})
}

function minus() {
    dispatcher.dispatch({ type: 'MINUS'})
}

function multiple() {
    dispatcher.dispatch({ type: 'MUL'})
}
function divide() {
    dispatcher.dispatch({ type: 'DIV'})
}
function setValue(value, destNum) {
    dispatcher.dispatch({ type: 'VALUE', value, destNum})
}

export {plus, minus, divide, multiple, setValue}