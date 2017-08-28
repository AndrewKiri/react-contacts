import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="row">
                <div className="col offset-m2 s12 m8 ">
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <div className="col offset-m2 m8">
                                    <span class="col card-title">Add Contact</span>
                                </div>
                                <form className="col offset-m2 m8" onSubmit={this.handleSubmit}>
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
                                            <input id="email" type="email" className="validate" />
                                            <label for="email" data-error="Please, enter a valid email">E-mail</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="phone" type="text" className="validate" />
                                            <label for="phone">Phone</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button className="waves-effect waves-light btn">Add</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;