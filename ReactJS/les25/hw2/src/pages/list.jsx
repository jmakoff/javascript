import React from 'react';

class List extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ol>
                {this.props.items.map((item) => {
                    return (
                        <li key={item.id}>{item.name}
                            <button data-id={item.id} onClick={this.props.handler}>Remove</button>
                        </li>
                    )
                })}
            </ol>
        )
    }
}

export default List;