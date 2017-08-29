import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        };
        this.props.methods.addContact(data);
    }

    renderEmptyForm() {
        return (
            <form className="col offset-m2 m8" onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="name" type="text" className="validate"/>
                        <label for="name">Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="surname" type="text" className="validate"/>
                        <label for="surname">Surname</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate"/>
                        <label for="email" data-error="Please, enter a valid email">E-mail</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="phone" type="text" className="validate"/>
                        <label for="phone">Phone</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="waves-effect waves-light btn">Add</button>
                    </div>
                </div>
            </form>
        );
    }

    render() {
        return this.renderEmptyForm();
    }
}

export default Form;