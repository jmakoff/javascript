/*### Задача 3
 Модифицируйте код предыдущей задачи. Реализуйте следующее:
 * При переходе по пути, не указанному в конфигурации маршрутизации, перенаправляйте пользователя на домашнюю страницу.
 */

import React from 'react';
import ReactDOM from 'react-dom';

// импорт необходимых для настройки маршрутизации объектов из модуля react-router
import { Router, Route, Link, IndexRoute, hashHistory, Redirect } from 'react-router';

import View1 from './views/view1.jsx';
import View2 from './views/view2.jsx';

class Main extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/view1"><button>View1</button></Link></li>
                    <li><Link to='/view2'> <button>View2</button></Link></li>
                </ul>
                <div >{this.props.children}</div>
            </div>
        )
    }
}
class Home extends React.Component {
    render() {
        return (
            <h3>This is the homepage</h3>
        )}
}

ReactDOM.render(<Router history={hashHistory}>
    <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='view1' component={View1}/>
        <Route path='view2' component={View2}/>
        <Redirect from="*" to="/" />
    </Route>
    </Router>, document.getElementById('output'));