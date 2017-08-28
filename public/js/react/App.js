import React, { Component } from 'react';
import Loader from './Loader';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Loader/>
            </div>
        );
    }
}

export default App;