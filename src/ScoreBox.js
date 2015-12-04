import React from 'react';
import ScoreListFilter from './ScoreListFilter';
import ScoreList from './ScoreList';
import wilks from './wilks';
import Score from './Score';

export default class ScoreBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {filters: {}};

        // prepare lists
        this.props.lists.forEach((list, listIndex) => {
            // precalculate wilks scores
            list.scores.forEach((score, scoreIndex) => {
                this.props.lists[listIndex].scores[scoreIndex] = Score.preprocess(
                    this.props.lists[listIndex].scores[scoreIndex],
                    this.props.lists[listIndex].gender
                );
            });

            // sort by total wilks score
            list.scores.sort((a, b) => {
                if (a.totalWilks < b.totalWilks) {
                    return -1;
                }
                if (a.totalWilks > b.totalWilks) {
                    return 1;
                }

                return 0;
            });
        });
    }

    handleFilterChange(filters) {
        this.setState({filters: filters});
    }

    render() {
        var listNodes = this.props.lists.map((list, index) => {
            return (
                <ScoreList list={list} userScore={this.props.userScore} key={index} filters={this.state.filters} />
            );
        });
        return (
            <section>
                <h2>Compare your strength</h2>
                <ScoreListFilter onFilterChange={this.handleFilterChange.bind(this)} disabled={!this.props.userScore} />
                {listNodes}
            </section>
        );
    }
}
ScoreBox.propTypes = {
    lists: React.PropTypes.arrayOf(React.PropTypes.object),
    userScore: React.PropTypes.object
};


ScoreBox.defaultProps = {
    lists: [],
    userScore: null
};
