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
                <Score name={score.name} wilks={score.wilks} gender={this.props.list.gender} weight={score.weight} squat={score.squat}
                       key={score.id}/>
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


