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
                            <Form methods={this.props.methods} edited={this.props.edited} editedIndex={this.props.editedIndex} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormContainer;