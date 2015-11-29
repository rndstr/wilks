import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import Score from './Score';

export default class ScoreList extends React.Component {
    static filterMatches(filters, list, user) {
        return Object.keys(filters)
            .filter(filter => filters[filter])
            .every(filter => {
                if (filter === 'weight') {
                    // min
                    if (list.meta.min && user.weight <= list.meta.min) {
                        return false;
                    }
                    // max
                    if (list.meta.max && user.weight > list.meta.max) {
                        return false;
                    }

                    return true;
                } else if (filter === 'gender') {
                    return list.meta.gender === user.gender;
                }
            });
    }

    render() {
        if (!ScoreList.filterMatches(this.props.filters, this.props.list, this.props.userScore)) {
            return (
                <div>
                    <p>filtered: {this.props.list.name}</p>
                </div>
            );
        }

        let scoreNodes = this.props.list.scores.map((score, index) => {
            return (
                <Score score={score} gender={this.props.list.gender} key={index}/>
            );
        });

        if (this.props.userScore) {
            let userScoreNode = <Score className="wilks-user-score" score={this.props.userScore}/>;
            let insertAt = scoreNodes.findIndex(node => {
                return (this.props.userScore.squatWilks < node.props.score.squatWilks);
            });

            if (insertAt === -1) {
                scoreNodes.push(userScoreNode);
            } else {
                scoreNodes = [].concat(
                    scoreNodes.slice(0, insertAt),
                    userScoreNode,
                    scoreNodes.slice(insertAt)
                );
            }
        }

        return (
            <div>
                <h3>{this.props.list.name}</h3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn tooltip=''>Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip='Body weight'>Body (wilks)</TableHeaderColumn>
                            <TableHeaderColumn tooltip='Squat weight'>Squat (wilks)</TableHeaderColumn>
                            <TableHeaderColumn>Bench press (wilks)</TableHeaderColumn>
                            <TableHeaderColumn>Deadlift (wilks)</TableHeaderColumn>
                            <TableHeaderColumn>Totals (wilks)</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true}>
                        {scoreNodes}
                    </TableBody>
                </Table>
            </div>
        );
    }
}


