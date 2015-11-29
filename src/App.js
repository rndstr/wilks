import './styles.scss';
import React from 'react';
import Form from './Form';
import ScoreBox from './ScoreBox';

let lists = [
    {
        id: 1,
        name: 'strengthlevel.com Standards (male) -60kg',
        meta: {max: 60, gender: 'male'},
        scores: [
            {name: 'Beginner', weight: 60, squat: 48, bench: 35, dead: 63},
            {name: 'Novice', weight: 60, squat: 72, bench: 54, dead: 90},
            {name: 'Intermediate', weight: 60, squat: 97, bench: 73, dead: 119},
            {name: 'Advanced', weight: 60, squat: 123, bench: 93, dead: 147},
            {name: 'Elite', weight: 60, squat: 147, bench: 111, dead: 175}
        ]
    },
    {
        id: 2,
        name: 'strengthlevel.com Standards (female) -40kg',
        meta: {max: 40, gender: 'female'},
        scores: [
            {name: 'Beginner', weight: 40, squat: 17, bench: 9, dead: 25},
            {name: 'Novice', weight: 40, squat: 34, bench: 21, dead: 44},
            {name: 'Intermediate', weight: 40, squat: 50, bench: 34, dead: 64},
            {name: 'Advanced', weight: 40, squat: 67, bench: 46, dead: 83},
            {name: 'Elite', weight: 40, squat: 83, bench: 59, dead: 102}
        ]
    },
    {
        id: 3,
        name: 'strengthlevel.com Standards (female) 56-60kg',
        meta: {min: 55, max: 60, gender: 'female'},
        scores: [
            {name: 'Beginner', weight: 60, squat: 24},
            {name: 'Novice', weight: 60, squat: 45},
            {name: 'Intermediate', weight: 60, squat: 66},
            {name: 'Advanced', weight: 60, squat: 88},
            {name: 'Elite', weight: 60, squat: 109}
        ]
    }
];

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
                <Form onUserScore={::this.handleUserScore} />
                <ScoreBox lists={lists} userScore={this.state.userScore} />
            </div>
        );
    }
}
