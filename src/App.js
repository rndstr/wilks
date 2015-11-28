import React from 'react';
import Form from './Form';
import ScoreBox from './ScoreBox';

let lists = [
    {
        id: 1,
        name: 'strengthlevel.com Standards (male) -60kg',
        filter: {max: 60, gender: 'male'},
        scores: [
            {name: 'Beginner', weight: 60, squat: 48},
            {name: 'Novice', weight: 60, squat: 72},
            {name: 'Intermediate', weight: 60, squat: 97},
            {name: 'Advanced', weight: 60, squat: 123},
            {name: 'Elite', weight: 60, squat: 147}
        ]
    },
    {
        id: 2,
        name: 'strengthlevel.com Standards (female) -40kg',
        filter: {max: 40, gender: 'female'},
        scores: [
            {name: 'Beginner', weight: 40, squat: 17},
            {name: 'Novice', weight: 40, squat: 34},
            {name: 'Intermediate', weight: 40, squat: 50},
            {name: 'Advanced', weight: 40, squat: 67},
            {name: 'Elite', weight: 40, squat: 83}
        ]
    },
    {
        id: 3,
        name: 'strengthlevel.com Standards (female) 56-60kg',
        filter: {min: 56, max: 60, gender: 'female'},
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
    render() {
        return (
            <div>
                <Form />
                <ScoreBox lists={lists}/>
            </div>
        );
    }
}
