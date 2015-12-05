import React from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import wilks from './wilks';

export default class Score extends React.Component {

    render() {
        let score = this.props.score;
        let rowStyle = {width: '15%'};

        return (
            <TableRow className={this.props.className}>
                <TableRowColumn className="wilks-col-name">{score.name}</TableRowColumn>
                <TableRowColumn className="wilks-col-body" style={rowStyle}>{Score.renderWeight(score.weight)} {Score.renderWilks(score.wilks)}</TableRowColumn>
                <TableRowColumn className="wilks-col-squat" style={rowStyle}>{Score.renderWeight(score.squat)} {Score.renderWilks(score.squatWilks)}</TableRowColumn>
                <TableRowColumn className="wilks-col-bench" style={rowStyle}>{Score.renderWeight(score.bench)} {Score.renderWilks(score.benchWilks)}</TableRowColumn>
                <TableRowColumn className="wilks-col-dead" style={rowStyle}>{Score.renderWeight(score.dead)} {Score.renderWilks(score.deadWilks)}</TableRowColumn>
                <TableRowColumn className="wilks-col-total" style={Object.assign({background: '#FFF9C4'}, rowStyle)}>{Score.renderWeight(score.total)} {Score.renderWilks(score.totalWilks)}</TableRowColumn>
            </TableRow>
        );
    }

    static renderWilks(number) {
        return <em>{number || number === 0 ? parseFloat(Math.round(number * 100) / 100).toFixed(2) : '?'}</em>;
    }
    static renderWeight(number) {
        return <strong>{number || number === 0 ? number : '?'}kg</strong>;
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

        score.wilks = +w;
        score.squatWilks = +sw;
        score.benchWilks = +bw;
        score.deadWilks = +dw;
        score.totalWilks = +tw;
        score.total = +t;

        return score;
    }
}

Score.propTypes = {
    score: React.PropTypes.object,
    className: React.PropTypes.string
};
