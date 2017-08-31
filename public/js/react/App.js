import React, { Component } from 'react';
import Loader from './Loader';
import List from './List';
import FormContainer from './FormContainer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false , contacts: { data: []}};
        if (this.retrieveLocalStorage("contacts")) {
            this.state.contacts.data = this.retrieveLocalStorage("contacts").data;
        }
    }

    addContact(data) {
        this.setState((prevState, props) => {
            contacts: prevState.contacts.data.push(data)
        });
    }

    removeContact(index) {
        this.setState((prevState, props) => {
            contacts: prevState.contacts.data.splice(index, 1)
        });
    }

    changeContactData(index, data) {
        this.setState((prevState, props) => {
            prevState.contacts.data[index] = data;
            return prevState;
        })
    }

    toggleEditState(index) {
        this.setState((prevState, props) => {
            if(prevState.contacts.data[index]["edit"] === true) {
                prevState.contacts.data[index]["edit"] = false;
            } else {
                prevState.contacts.data[index]["edit"] = true;
            }
            return prevState;
        })
    }

    componentDidMount() {
        this.setState({
            loaded: true
        })
    }

    componentDidUpdate() {
        this.updateLocalStorage("contacts", JSON.stringify(this.state.contacts));
    }

    updateLocalStorage(key, data) {
        if (window.localStorage.setItem(key, JSON.stringify(data))) {
            return true;
        } else {
            return undefined;
        }
    }

    retrieveLocalStorage(key) {
        let foundLocalData = JSON.parse(JSON.parse(window.localStorage.getItem(key)));
        if(foundLocalData) {
            return foundLocalData;
        } else {
            return undefined;
        }
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
            removeContact: this.removeContact.bind(this),
            changeContactData: this.changeContactData.bind(this),
            toggleEditState: this.toggleEditState.bind(this),
            updateLocalStorage: this.updateLocalStorage,
            retrieveLocalStorage: this.retrieveLocalStorage
        };
        let passedFormMethods = {
            addContact: this.addContact.bind(this),
        };
        if(this.state.contacts.data.length > 0) {
            return (
                <div>
                    <FormContainer methods={passedFormMethods} edited={this.state.edited} editedIndex={this.state.editedIndex}/>
                    <List methods={passedListMethods} contacts={this.state.contacts.data}/>
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