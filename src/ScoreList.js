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
        var scoreNodes = this.props.list.scores.map(score => {
            return (
                <Score score={score} gender={this.props.list.gender} key={score.id}/>
            );
        });

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


