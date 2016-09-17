/*###Задача 1
 Создайте 2 файла с React компонентами, содержащими текст ‘View 1’ и ‘View2’.
 Создайте файл index.js, в котором выполните настройку маршрутизации для переключения между путями “/view1” и “/view2”.
 */

import React from 'react';
import ReactDOM from 'react-dom';

// импорт необходимых для настройки маршрутизации объектов из модуля react-router
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

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
    </Route>
    </Router>, document.getElementById('output'));