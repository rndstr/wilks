import React from 'react';
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import SelectField from 'material-ui/lib/select-field'

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: '', gender: 'male', weight: '', squat: ''};
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleWeightChange(e) {
        this.setState({weight: e.target.value});
    }

    handleGenderChange(e) {
        this.setState({gender: e.target.value});
    }

    handleSquatChange(e) {
        this.setState({squat: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        alert(e.target.name);
    }

    render() {
        let genderItems = [
            {
                payload: 'male',
                text: 'Male'
            },
            {
                payload: 'female',
                text: 'Female'
            }
        ];
        return (
            <form className="score-form" onSubmit={::this.handleSubmit}>
                <TextField
                    floatingLabelText="Name"
                    value={this.state.name}
                    onChange={::this.handleNameChange}/>

                <SelectField
                    value={this.state.gender}
                    onChange={::this.handleGenderChange.bind(null, 'selectValue')}
                    menuItems={genderItems}/>

                <TextField
                    floatingLabelText="Body weight"
                    value={this.state.weight}
                    onChange={::this.handleWeightChange}/>

                <TextField
                    floatingLabelText="Squat"
                    value={this.state.squat}
                    onChange={::this.handleSquatChange}/>

                <RaisedButton
                    label="Go"
                    onClick={::this.handleSubmit}/>
            </form>
        );
    }
}
