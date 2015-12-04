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
            <div style={{marginBottom: '16px'}}>
                <CheckBox
                    name="weight"
                    label="Only your weight class"
                    onClick={this.handleFilterChange.bind(this)}
                    disabled={this.props.disabled}
                    />

                <CheckBox
                    name="gender"
                    label="Only your gender"
                    onClick={this.handleFilterChange.bind(this)}
                    disabled={this.props.disabled}
                    />
            </div>
        );
    }
}

ListFilter.propTypes = {
    onFilterChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool
}
