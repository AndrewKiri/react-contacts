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
        if (event.target.getAttribute("name") == "email") {
            this.validateEmail(event.target, event.target.value);
        }
        if (event.target.getAttribute("name") == "phone") {
            this.validatePhoneNumber(event.target, event.target.value);
        }
        this.props.methods.changeContactData(this.props.index, newData);
    }

    handleEditStateChange(event) {
        if (this.validateForEmail(this.props.data.email) && this.validateForNumbers(this.props.data.phone)){
            this.props.methods.toggleEditState(this.props.index);
        } 
    }

    validateForNumbers(str) {
        return /^\d+$/.test(str);
    }

    validateForEmail(str) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(str);
    }

    validatePhoneNumber(target, value) {
        if (!this.validateForNumbers(value)) {
            $(target).addClass("invalid");
        } else {
            $(target).removeClass("invalid");
        }
    }

    validateEmail(target, value) {
        if (!this.validateForEmail(value)) {
            $(target).addClass("invalid");
        } else {
            $(target).removeClass("invalid");
        }
    }

    render() {
        let hiddenRowCheck = "";
        if (this.props.index + 1 > this.props.currentlyActivePage * 10 || this.props.index + 1 < this.props.currentlyActivePage * 10 - 10) {
            hiddenRowCheck = "hide";
        }
        if(this.props.data.edit === true) {
            return (
                <tr className={hiddenRowCheck}>
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
                            <input name="email" type="email" value={this.props.data.email} onChange={this.handleChange.bind(this)} onBlur={this.validateEmail.bind(this)}/>
                            <label for="email" data-error="invalid email"></label>
                        </div>
                    </td>
                    <td>
                        <div className="input-field inline">
                            <input name="phone" type="text" value={this.props.data.phone} onChange={this.handleChange.bind(this)} onBlur={this.validatePhoneNumber.bind(this)}/>
                            <label for="phone" data-error="invalid phone number"></label>
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
                <tr className={hiddenRowCheck}>
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