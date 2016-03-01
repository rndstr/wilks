import React from 'react';
import ScoreList from './ScoreList';

export default class ScoreCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listNodes = this.props.category.lists.map((list, listIndex) => {
            return (
                <ScoreList list={list} userScore={this.props.userScore} key={listIndex}
                           categoryId={this.props.idx} filters={this.props.filters}/>
            );
        });
        console.log(this.props.filters, this.props.idx);
        const visible = (typeof this.props.filters.category === 'undefined' || this.props.filters.category === -1 || this.props.filters.category === this.props.idx);
        return (
            <article style={{display: visible ? 'block' : 'none'}}>
                <h3>{this.props.category.name} {visible ? 'YES':'NO'}</h3>
                {listNodes}
            </article>
        );
    }
}
ScoreCategory.propTypes = {
    idx: React.PropTypes.number,
    category: React.PropTypes.object,
    filters: React.PropTypes.object,
    userScore: React.PropTypes.object
};


ScoreCategory.defaultProps = {
    category: {},
    userScore: null
};
