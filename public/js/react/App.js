import React, { Component } from 'react';
import Loader from './Loader';
import List from './List';
import Form from './Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            contacts: [
                {
                    name: "Andrew",
                    surname: "Kirichok",
                    email: "andrewkiri@yandex.ru",
                    phone: "+48502992767"
                },
                {
                    name: "Vitaly",
                    surname: "Kovalenko",
                    email: "andrewkiri@yandex.ru",
                    phone: "+48502992767"
                },
                {
                    name: "Valera",
                    surname: "Belarus",
                    email: "andrewkiri@yandex.ru",
                    phone: "+48502992767"
                },
                {
                    name: "Orest",
                    surname: "Hrachow",
                    email: "andrewkiri@yandex.ru",
                    phone: "+48502992767"
                },
                {
                    name: "Telega",
                    surname: "Ivanovna",
                    email: "andrewkiri@yandex.ru",
                    phone: "+48502992767"
                },
            ]
        }
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
        return (
            <div>
                <Form/>
                <List contacts={this.state.contacts}/>
            </div>
        );
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