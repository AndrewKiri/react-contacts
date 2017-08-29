import React, { Component } from 'react';
import Form from './Form';

class FormContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col offset-m2 s12 m8 ">
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <div className="col offset-m2 m8">
                                    <span class="col card-title">Add/Edit Contact</span>
                                </div>
                                <Form methods={this.props.methods} edited={this.props.edited}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormContainer;