import React from 'react';
import ScoreListFilter from './ScoreListFilter';
import ScoreList from './ScoreList';
import wilks from './wilks';

export default class ScoreBox extends React.Component {
    constructor(props) {
        super(props);

        this.props.lists.forEach((list, listIndex) => {
            list.scores.forEach((score, scoreIndex) => {
                this.props.lists[listIndex].scores[scoreIndex].wilks = wilks(list.gender);
            });
        });
    }
    render() {
        var listNodes = this.props.lists.map(list => {
            return (
                <ScoreList list={list} />
            );
        });
        return (
            <div>
                <ScoreListFilter />
                {listNodes}
            </div>
        );
    }
}


