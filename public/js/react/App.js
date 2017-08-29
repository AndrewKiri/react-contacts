import React, { Component } from 'react';
import Loader from './Loader';
import List from './List';
import FormContainer from './FormContainer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            contacts: [],
            edited: []
        }
    }

    addContact(data) {
        this.setState((prevState, props) => {
            contacts: prevState.contacts.push(data)
        });
    }

    removeContact(index) {
        this.setState((prevState, props) => {
            contacts: prevState.contacts.splice(index, 1)
        });
    }

    editContact(index) {
        this.setState((prevState, props) => {
            edited: edited.push(this.state.contacts[index])
        })
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
        // Method Objects that are passed to React Components as props.methods
        let passedListMethods = {
            editContact: this.editContact.bind(this),
            removeContact: this.removeContact.bind(this)
        };
        let passedFormMethods = {
            addContact: this.addContact.bind(this)
        };

        if(this.state.contacts.length > 0) {
            return (
                <div>
                    <FormContainer methods={passedFormMethods} edited={this.state.edited}/>
                    <List methods={passedListMethods} contacts={this.state.contacts}/>
                </div>
            );
        } else {
            return (
                <div>
                    <FormContainer methods={passedFormMethods} />
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