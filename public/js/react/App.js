import React, { Component } from 'react';
import Loader from './Loader';
import List from './List';
import Form from './Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            contacts: []
        }
    }

    addContact(data) {
        this.setState((prevState, props) => {
            contacts: prevState.contacts.push(data)
        });
    }

    componentDidMount() {
        this.setState({
            loaded: true
        })
    }

    renderLoader() {
        return (            
            <div>
                <Loader/>
            </div>
        );
    }

    renderApp() {
        if(this.state.contacts.length > 0) {
            return (
                <div>
                    <Form addContact={this.addContact.bind(this)} />
                    <List contacts={this.state.contacts}/>
                </div>
            );
        } else {
            return (
                <div>
                    <Form addContact={this.addContact.bind(this)} />
                </div>
            );
        }
    }

    render() {
        if(this.state.loaded === true) {
            return this.renderApp();
        } else {
            return this.renderLoader();
        }
    }
}

export default App;