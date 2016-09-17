import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';
class Main extends React.Component{
    render() {
        return (<div>
            <h3>This is Main!</h3>
            </div>
        )
    }
}
ReactDOM.render(<div>
    <App/>
    <Main/>
</div>, document.getElementById('output'))