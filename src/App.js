import React from 'react';
import Form from './Form';
import ScoreList from './ScoreList';

let scores = [
    {id: 1, name: "Foo'", weight: 78.2, squat: 160},
    {id: 2, name: "Boo'", weight: 44.0, squat: 20}
];


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Form />
                <ScoreList scores={scores}/>
            </div>
        );
    }
}
