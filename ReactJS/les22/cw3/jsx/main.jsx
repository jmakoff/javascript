import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {

    // props и state определяются через constructor
    constructor(props) {
        super(props);

        // для того, чтобы ключевое слово this можно было использовать в качестве ссылки на текущий React класс,
        // следует использовать метод bind в конструкторе класса
        this.tick = this.tick.bind(this);
    }

    tick() {

        var ul = document.getElementsByTagName('ol')[0];
        for (var prop in this.props){
            var li = document.createElement('li');
            li.innerHTML = prop +': '+ this.props[prop];
            ul.appendChild(li);
        }

    }
    render() {
        return (
            <div>
                <button className='btn-lg' onClick={this.tick}>My properties</button>
                <ol></ol>
            </div>
        );
    }
}

var container = document.getElementById('output');
ReactDOM.render(<Counter name='button' id='my_button' type="simple" status="first"/>, container);