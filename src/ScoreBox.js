import React from 'react';
import ScoreListFilter from './ScoreListFilter';
import ScoreCategory from './ScoreCategory';
import wilks from './wilks';
import Score from './Score';

export default class ScoreBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {filters: {}};

        // prepare lists
        this.props.categories.forEach((category, catIndex) => {
            // precalculate wilks scores
            category.lists.forEach((list, listIndex) => {
                list.scores.forEach((score, scoreIndex) => {
                    this.props.categories[catIndex].lists[listIndex].scores[scoreIndex] = Score.preprocess(
                        this.props.categories[catIndex].lists[listIndex].scores[scoreIndex],
                        this.props.categories[catIndex].lists[listIndex].meta.gender
                    );
                    if (this.props.categories[catIndex].lists[listIndex].weight) {
                        this.props.categories[catIndex].lists[listIndex].scores[scoreIndex].weight =
                            this.props.categories[catIndex].lists[listIndex].weight;
                    }
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
        });
    }

    handleFilterChange(filters) {
        this.setState({filters: filters});
    }

    render() {
        const categoryNodes = this.props.categories.map((category, catIndex) => {
            return (
                <ScoreCategory category={category} userScore={this.props.userScore} idx={catIndex} key={catIndex}
                               filters={this.state.filters}/>
            );
        });
        return (
            <section>
                <h2>Compare your strength</h2>
                <ScoreListFilter onFilterChange={this.handleFilterChange.bind(this)} disabled={!this.props.userScore}
                                 categories={this.props.categories}/>
                {categoryNodes}
                <p>Want more lists? Contact me</p>
            </section>
        );
    }
}
ScoreBox.propTypes = {
    categories: React.PropTypes.arrayOf(React.PropTypes.object),
    filters: React.PropTypes.object,
    userScore: React.PropTypes.object
};


ScoreBox.defaultProps = {
    categories: [],
    userScore: null
};
