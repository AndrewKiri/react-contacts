import React, { Component } from 'react';
import ListItem from './ListItem.js';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1 
        }
    }

    buildList(contacts) {
        return (
            contacts.map((item, index) => <ListItem key={index} data={item} index={index} currentlyActivePage={this.state.active} methods={this.props.methods} />)
        );
    }

    changeCurrentlyActivePage(pageNumber) {
        this.setState({ active: pageNumber });
    }

    buildPaginator(currentlyActivePage) {
        let contactsLength = this.props.contacts.length;
        if (contactsLength > 10) {
            let numberOfPages = contactsLength % 10 == 0 ? contactsLength/10 : Math.floor(contactsLength/10)+1;
            let pagesCount = [], i = 0;
            while (i < numberOfPages) {
                pagesCount.push(1+i);
                i++;
            }
            return pagesCount.map((pageNumber, index) => {
                if (pageNumber == currentlyActivePage) {
                    return (<li key={index} class="active"><a onClick={this.changeCurrentlyActivePage.bind(this, currentlyActivePage)}>{currentlyActivePage}</a></li>);
                    } else {
                    return (<li key={index} class="waves-effect"><a onClick={this.changeCurrentlyActivePage.bind(this, pageNumber)}>{pageNumber}</a></li>);
                    }
                }
            )
        } else {
            return (
                <li class="active"><a href="#!">1</a></li>
            );
        }
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
                            <ul class="pagination">
                                {this.buildPaginator(this.state.active)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;