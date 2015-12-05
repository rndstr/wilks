import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
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
        let visible = ScoreList.filterMatches(this.props.filters, this.props.list, this.props.userScore);
        let scoreNodes = this.props.list.scores.map((score, index) => {
            return (
                <Score score={score} gender={this.props.list.gender} key={index}/>
            );
        });

        if (this.props.userScore) {
            let userScoreNode = <Score className="wilks-user-score" score={this.props.userScore} key="-1"/>;
            let insertAt = scoreNodes.findIndex(node => {
                return (this.props.userScore.totalWilks < node.props.score.totalWilks);
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

        let nstyle = {width: '15%'};

        return (
            <Card style={{marginBottom: '16px', display: visible ? 'block' : 'none'}}>
                <CardTitle style={{paddingBottom: 0, paddingTop: '16px'}} title={this.props.list.name} subtitle={this.props.list.url}/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn className="wilks-col-name" />
                            <TableHeaderColumn style={nstyle} className="wilks-col-body">Body weight</TableHeaderColumn>
                            <TableHeaderColumn style={nstyle} className="wilks-col-squat">Squat</TableHeaderColumn>
                            <TableHeaderColumn style={nstyle} className="wilks-col-bench">Bench press</TableHeaderColumn>
                            <TableHeaderColumn style={nstyle} className="wilks-col-dead">Deadlift</TableHeaderColumn>
                            <TableHeaderColumn style={nstyle} className="wilks-col-totals">Totals</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true}>
                        {scoreNodes}
                    </TableBody>
                </Table>
            </Card>
        );
    }
}

ScoreList.propTypes = {
    list: React.PropTypes.object,
    filters: React.PropTypes.object,
    userScore: React.PropTypes.object
};
