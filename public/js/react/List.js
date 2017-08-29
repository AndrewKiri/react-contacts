import React, { Component } from 'react';
import ListItem from './ListItem.js';

class List extends Component {
    constructor(props) {
        super(props);
    }

    buildList(contacts) {
        return (
            contacts.map((item, index) => <ListItem key={index} data={item} index={index} removeContact={this.props.removeContact} />)
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col offset-m2 s12 m8 ">
                    <div className="card">
                        <div className="card-content">
                            <table className="highlight">
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