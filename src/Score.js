import React from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import wilks from './wilks';

export default class Score extends React.Component {
    render() {
        var w = this.props.wilks || wilks(this.props.gender, this.props.weight);

        return (
            <TableRow>
                <TableRowColumn>{this.props.name}</TableRowColumn>
                <TableRowColumn>{this.props.weight}kg ({w})</TableRowColumn>
                <TableRowColumn>{this.props.squat}kg ({w * this.props.squat})</TableRowColumn>
            </TableRow>
        );
    }
}


