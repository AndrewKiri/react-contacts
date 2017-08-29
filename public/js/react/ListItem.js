import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete() {
        this.props.methods.removeContact(this.props.index);
    }

    handleChange(event) {
        let newData = this.props.data;
        newData[event.target.getAttribute("name")] = event.target.value;
        this.props.methods.changeContactData(this.props.index, newData);
    }

    handleEditStateChange(event) {
        this.props.methods.toggleEditState(this.props.index);
    }

    render() {
        if(this.props.data.edit === true) {
            return (
                <tr>
                    <td>
                        <div className="input-field inline">
                            <input name="name" type="text" className="validate" value={this.props.data.name} onChange={this.handleChange.bind(this)} />
                        </div>
                    </td>
                    <td>
                        <div className="input-field inline">
                            <input name="surname" type="text" className="validate" value={this.props.data.surname} onChange={this.handleChange.bind(this)} />
                        </div>
                    </td>
                    <td>
                        <div className="input-field inline">
                            <input name="email" type="email" className="validate" value={this.props.data.email} onChange={this.handleChange.bind(this)} data-error="Please, enter a valid email"/>
                        </div>
                    </td>
                    <td>
                        <div className="input-field inline">
                            <input name="phone" type="text" className="validate" value={this.props.data.phone} onChange={this.handleChange.bind(this)} />
                        </div>
                    </td>
                    <td className="actions">
                        <a className="btn-flat" onClick={this.handleEditStateChange.bind(this)}><i class="material-icons">check</i></a>
                        <a className="btn-flat disabled"><i class="material-icons">edit</i></a>
                        <a className="btn-flat" onClick={this.handleDelete.bind(this)}><i class="material-icons">delete</i></a>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.surname}</td>
                    <td>{this.props.data.email}</td>
                    <td>{this.props.data.phone}</td>
                    <td className="actions">
                        <a className="btn-flat disabled"><i class="material-icons">check</i></a>
                        <a className="btn-flat" onClick={this.handleEditStateChange.bind(this)}><i class="material-icons">edit</i></a>
                        <a className="btn-flat" onClick={this.handleDelete.bind(this)}><i class="material-icons">delete</i></a>
                    </td>
                </tr>
            ); 
        }
    }
}

export default ListItem;