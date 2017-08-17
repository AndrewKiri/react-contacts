import React, { Component } from 'react';
import Article from './Article';

class List extends Component {
    constructor(props) {
        super(props);
    }

    buildList(articles) {
        return articles.map((card, index) => console.log(card, index));
    }

    render() {
        return (
            <div className="row">
                {this.buildList(this.props.articles)}
            </div>
        );
    }
}

export default List;