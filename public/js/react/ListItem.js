import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    handleEdit() {
        this.props.methods.editContact(this.props.index);
    }

    handleDelete() {
        this.props.methods.removeContact(this.props.index);
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.surname}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.phone}</td>
                <td className="actions">
                    <a onClick={this.handleEdit.bind(this)}><i class="material-icons">edit</i></a>
                    <a onClick={this.handleDelete.bind(this)}><i class="material-icons">delete</i></a>
                </td>
            </tr>
        );
    }
}

export default ListItem;