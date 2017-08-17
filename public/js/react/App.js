import React, { Component } from 'react';
import { request } from 'graphql-request';
import List from './List';
import Loader from './Loader';

class App extends Component {
    constructor(props) {
        super(props);
    }

    getListData(cid = 1, offset = 0, limit = 25) {
        let query = `query { 
            tileset(cid: ${cid}, offset: ${offset}, limit: ${limit}, t: Article) {
                id,
                cid,
                url,
                title,
                body(t: Plain){
                data
                },
                img {
                url,
                h,
                w,
                author
                },
                tags,
            }
            }`;
        request('https://mobileapi.wp.pl/v1/graphql?', query).then(data => console.log(data));
    }

    componentDidMount() {
        this.getListData();
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