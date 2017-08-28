import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.surname}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.phone}</td>
                <td>Action</td>
            </tr>
        );
    }
}

export default ListItem;