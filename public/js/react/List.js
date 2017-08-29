import React, { Component } from 'react';
import ListItem from './ListItem.js';

class List extends Component {
    constructor(props) {
        super(props);
    }

    buildList(contacts) {
        return (
            contacts.map((item, index) => <ListItem key={index} data={item} index={index} methods={this.props.methods} />)
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col offset-m1 s12 m10 ">
                    <div className="card">
                        <div className="card-content">
                            <table className="highlight responsive-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>E-mail</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.buildList(this.props.contacts)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;