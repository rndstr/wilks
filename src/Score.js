import React from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import wilks from './wilks';

export default class Score extends React.Component {

    formatWilks(number) {
        return <em>{number ? parseFloat(Math.round(number * 100) / 100).toFixed(2) : '?'}</em>;
    }
    formatWeight(number) {
        return <strong>{number ? number : '?'}kg</strong>;
    }

    render() {
        let score = this.props.score;
        let nstyle = {width: '15%'};

        return (
            <TableRow className={this.props.className}>
                <TableRowColumn className="wilks-col-name">{score.name}</TableRowColumn>
                <TableRowColumn className="wilks-col-body" style={nstyle}>{this.formatWeight(score.weight)} {this.formatWilks(score.wilks)}</TableRowColumn>
                <TableRowColumn className="wilks-col-squat" style={nstyle}>{this.formatWeight(score.squat)} {this.formatWilks(score.squatWilks)}</TableRowColumn>
                <TableRowColumn className="wilks-col-bench" style={nstyle}>{this.formatWeight(score.bench)} {this.formatWilks(score.benchWilks)}</TableRowColumn>
                <TableRowColumn className="wilks-col-dead" style={nstyle}>{this.formatWeight(score.dead)} {this.formatWilks(score.deadWilks)}</TableRowColumn>
                <TableRowColumn className="wilks-col-total" style={Object.assign({background: '#FFF9C4'}, nstyle)}>{this.formatWeight(score.total)} {this.formatWilks(score.totalWilks)}</TableRowColumn>
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
