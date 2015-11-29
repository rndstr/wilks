import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import SelectField from 'material-ui/lib/select-field';
import Score from './Score';

export default class Form extends React.Component {

    constructor() {
        super();
        this.state = {name: '', gender: 'male', weight: '', squat: ''};
    }


    handleSubmit(e) {
        e.preventDefault();

        let score = Score.preprocess({
                name: this.state.name,
                weight: this.state.weight,
                squat: this.state.squat
            },
            this.state.gender
        );
        this.props.onUserScore(score);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleWeightChange(e) {
        this.setState({weight: e.target.value});
    }

    handleSquatChange(e) {
        this.setState({squat: e.target.value});
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
                    value={this.props.name}
                    style={{width: 200}}
                    onChange={::this.handleNameChange}
                    />

                <TextField
                    floatingLabelText="Body weight"
                    value={this.props.weight}
                    style={{width: 150}}
                    onChange={::this.handleWeightChange}
                    />

                <TextField
                    floatingLabelText="Squat"
                    value={this.props.squat}
                    style={{width: 150}}
                    onChange={::this.handleSquatChange}
                    />

                <RaisedButton
                    label="Calculate"
                    onClick={::this.handleSubmit}/>
            </form>
        );
    }
}

Form.propTypes = {
    onUserScore: React.PropTypes.func.isRequired
};

