import React from 'react';
import CheckBox from 'material-ui/lib/checkbox'


export default class ListFilter extends React.Component {
    constructor() {
        super();
        this.state = {weight: false, gender: false};
    }

    handleFilterChange(e) {
        let update = {};
        update[e.target.name] = e.target.checked;
        this.setState(update, function () {
            this.props.onFilterChange(this.state);
        });
    }

    render() {
        return (
            <div>
                <CheckBox
                    name='weight'
                    label='Filter by your weight'
                    onClick={::this.handleFilterChange}
                    disabled={this.props.disabled}
                    />
                <CheckBox
                    name='gender'
                    label='Filter by your gender'
                    onClick={::this.handleFilterChange}
                    disabled={this.props.disabled}
                    />
            </div>
        );
    }
}

ListFilter.propTypes = {
    onFilterChange: React.PropTypes.func.isRequired
}
