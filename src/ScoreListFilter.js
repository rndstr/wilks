import React from 'react';
import CheckBox from 'material-ui/lib/checkbox'
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class ListFilter extends React.Component {
    constructor() {
        super();
        this.state = {weight: false, gender: false, category: -1};
    }

    handleFilterChange(e) {
        let update = {};
        update[e.target.name] = e.target.checked;
        this.setState(update, () => {
            this.props.onFilterChange(this.state);
        });
    }

    handleSelectChange(e, idx, val) {
        this.setState({category: val}, () => {
            this.props.onFilterChange(this.state);
        });
    }

    render() {
        const categoryTitles = this.props.categories.map((category, catIndex) => {
            return (
                <MenuItem value={catIndex} key={catIndex} primaryText={category.name}/>
            );
        });
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
                <SelectField
                    value={this.state.category}
                    floatingLabelText="Category"
                    onChange={this.handleSelectChange.bind(this)}>
                    <MenuItem value={-1} key={-1} primaryText="All" />
                    {categoryTitles}
                </SelectField>
            </div>
        );
    }
}

ListFilter.propTypes = {
    categories: React.PropTypes.arrayOf(React.PropTypes.object),
    onFilterChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool
}
