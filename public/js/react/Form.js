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
            phone: $('#phone').val(),
            edit: false
        };
        if(this.validateForEmail(data.email) && this.validateForNumbers(data.phone)) {
            this.props.methods.addContact(data);
        }
    }

    validateForNumbers(str) {
        return /^\d+$/.test(str);
    }

    validateForEmail(str) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(str);
    }

    validatePhoneNumber(event) {
        let input = event.target;
        if (!this.validateForNumbers(input.value)) {
            $(input).addClass("invalid");
        } else {
            $(input).removeClass("invalid");
        }
    }

    validateEmail(event) {
        let input = event.target;
        if(!this.validateForEmail(input.value)) {
            $(input).addClass("invalid");
        } else {
            $(input).removeClass("invalid");
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col offset-m2 m8">
                    <span class="col card-title">Add Contact</span>
                </div>
                <form className="col offset-m2 m8" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="name" type="text" className="validate" />
                            <label for="name">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="surname" type="text" className="validate" />
                            <label for="surname">Surname</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="email" onChange={this.validateEmail.bind(this)} onBlur={this.validateEmail.bind(this)}/>
                            <label className="contact-list-label" for="email" data-error="Please, enter a valid email">E-mail</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="phone" type="text" onChange={this.validatePhoneNumber.bind(this)} onBlur={this.validatePhoneNumber.bind(this)}/>
                            <label className="contact-list-label" for="phone" data-error="Please, enter a valid phone number">Phone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="waves-effect waves-light btn">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;