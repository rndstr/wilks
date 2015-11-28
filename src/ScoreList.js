import React from 'react';
import ScoreListFilter from './ScoreListFilter';
import Score from './Score';

export default class ScoreList extends React.Component {
    render() {
        var scoreNodes = this.props.scores.map(function (score) {
            return (
                <Score name={score.name} weight={score.weight} squat={score.squat} key={score.id}/>
            );
        });
        return (
            <div>
                <ScoreListFilter />
                <table
                    className="score-list">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Body weight</th>
                        <th>Squat</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scoreNodes}
                    </tbody>
                </table>
            </div>
        );
    }
}


