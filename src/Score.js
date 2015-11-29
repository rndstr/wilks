import React from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import wilks from './wilks';

export default class Score extends React.Component {
    render() {
        var score = this.props.score;

        return (
            <TableRow className={this.props.className}>
                <TableRowColumn>{score.name}</TableRowColumn>
                <TableRowColumn>{score.weight}kg<br/>({score.wilks})</TableRowColumn>
                <TableRowColumn>{score.squat}kg<br/>({score.squatWilks})</TableRowColumn>
                <TableRowColumn>{score.bench}kg<br/>({score.benchWilks})</TableRowColumn>
                <TableRowColumn>{score.dead}kg<br/>({score.deadWilks})</TableRowColumn>
                <TableRowColumn>{score.total}kg<br/>({score.totalWilks})</TableRowColumn>
            </TableRow>
        );
    }

    /**
     * Helper method to calculate wilks scores
     *
     * @param {object} score
     * @param {string} gender
     * @returns {object}
     */
    static preprocess(score, gender) {
        var w = score.wilks || wilks(gender, score.weight),
            sw = score.squatWilks || score.squat * w,
            bw = score.benchWilks || score.bench * w,
            dw = score.deadWilks || score.dead * w,
            t = score.total || (score.squat + score.bench + score.dead),
            tw = score.totalWilks || (sw + bw + dw);

        score.wilks = w;
        score.squatWilks = sw;
        score.benchWilks = bw;
        score.deadWilks = dw;
        score.totalWilks = tw;
        score.total = t;

        return score;
    }
}


