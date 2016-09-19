import React from 'react';

import appStore from '../stores/appStore';
import * as appActions from '../actions/appActions';

import List from './list.jsx';

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            items: appStore.getFilteredItems()
        };
        this.addClickHandler = this.addClickHandler.bind(this);
        this.removeItemHandler = this.removeItemHandler.bind(this);
        this.searchClickHandler = this.searchClickHandler.bind(this);
    }

    addClickHandler() {
        var newItem = {
            name: document.getElementById('new-item').value,
            id: `${Date.now()}`
        };
        appActions.createItem(newItem);
    }

    searchClickHandler() {
        appActions.filterItems(document.getElementById('search').value);
    }

    componentWillMount() {
        appStore.on('itemsChange', () => {
            this.setState({items: appStore.getFilteredItems()})
        })
    }

    removeItemHandler(e) {
        appActions.removeItem(e.target.dataset.id)
    }

    render() {
        return (
            <div >
                <div >
                    <input id="new-item" type="text" placeholder="Enter todo task"/>
                    <span >
                        <button onClick={this.addClickHandler}>Add task</button>
                    </span>
                </div>

                <List items={this.state.items} handler={this.removeItemHandler}/>
                <div >
                    <input id="search" type="text" placeholder="Enter search string"/>

                </div>
                <span>
                        <button onClick={this.searchClickHandler}>Search</button>
                </span>
            </div>
        )
    }
}

export default App;