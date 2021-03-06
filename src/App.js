import './styles.scss';
import React from 'react';
import Form from './Form';
import ScoreBox from './ScoreBox';

import strengthlevel from './categories/strengthlevel';
const categories = [];

strengthlevel(categories);

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {userScore: null};
    }
    handleUserScore(score) {
        this.setState({userScore: score});
    }

    render() {
        return (
            <div>
                <h1>Wilks Calculator</h1>
                <Form onUserScore={this.handleUserScore.bind(this)} />
                <ScoreBox categories={categories} userScore={this.state.userScore} />
            </div>
        );
    }
}
