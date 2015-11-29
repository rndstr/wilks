import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import Score from './Score';

export default class ScoreList extends React.Component {
    render() {
        let scoreNodes = this.props.list.scores.map((score, index) => {
            return (
                <Score score={score} gender={this.props.list.gender} key={index}/>
            );
        });

        if (this.props.userScore) {
            let userScoreNode = <Score className="wilks-user-score" score={this.props.userScore} />;
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
                <h2>{this.props.list.name}</h2>
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


