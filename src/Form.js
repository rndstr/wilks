import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import SelectField from 'material-ui/lib/select-field';
import Score from './Score';

export default class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '', gender: 'male',
            weight: '', squat: '', bench: '', dead: '',
            weightError: '', squatError: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        let score = Score.preprocess({
                name: this.state.name,
                weight: +this.state.weight,
                squat: +this.state.squat,
                bench: +this.state.bench,
                dead: +this.state.dead,
                gender: this.state.gender
            },
            this.state.gender
        );
        this.props.onUserScore(score);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleGenderChange(e) {
        this.setState({gender: e.target.value});
    }

    handleNumberChange(what, e) {
        this.validateAndSet(what, e.target.value);
    }

    validateAndSet(what, value) {
        let state = {};
        if (Form.isNumber(value) || !value) {
            state[what] = value;
            state[what + 'Error'] = '';
        } else {
            state[what + 'Error'] = 'Must be a number';
        }
        this.setState(state);
    }

    static isNumber(value) {
        return ('' + value).match(/^\d+(\.\d*)?$/);
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

                <SelectField
                    value={this.state.gender}
                    floatingLabelText="Gender"
                    menuItems={genderItems}
                    onChange={::this.handleGenderChange}
                    />

                <TextField
                    floatingLabelText="Body weight in kg"
                    value={this.state.weight}
                    style={{width: 150}}
                    onChange={this.handleNumberChange.bind(this, 'weight')}
                    errorText={this.state.weightError}
                    />

                <TextField
                    floatingLabelText="Squat in kg"
                    value={this.state.squat}
                    style={{width: 150}}
                    onChange={this.handleNumberChange.bind(this, 'squat')}
                    errorText={this.state.squatError}
                    />

                <TextField
                    floatingLabelText="Bench press in kg"
                    value={this.state.bench}
                    style={{width: 150}}
                    onChange={this.handleNumberChange.bind(this, 'bench')}
                    errorText={this.state.benchError}
                    />
                <TextField
                    floatingLabelText="Deadlift in kg"
                    value={this.state.dead}
                    style={{width: 150}}
                    onChange={this.handleNumberChange.bind(this, 'dead')}
                    errorText={this.state.deadError}
                    />

                <TextField
                    floatingLabelText="Name (optional)"
                    value={this.state.name}
                    style={{width: 200}}
                    onChange={::this.handleNameChange}
                    />

                <RaisedButton
                    label="Update"
                    onClick={::this.handleSubmit}/>
            </form>
        );
    }
}

Form.propTypes = {
    onUserScore: React.PropTypes.func.isRequired
};

