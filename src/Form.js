import React from 'react';
import ReactDOM from 'react-dom';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import SelectField from 'material-ui/lib/select-field';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';

import Score from './Score';

export default class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'You', gender: 'male',
            weight: '', squat: '', bench: '', dead: '',
            weightError: '', squatError: '',
            unit: 'kg'
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        let errors = ['weight', 'squat', 'bench', 'dead'].filter(what => {
                return !this.validate(what);
        });

        if (errors.length > 0) {
            return;
        }

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

    handleChange(what, e) {
        var state = {};
        state[what] = e.target.value;
        this.setState(state);
    }

    handleNumberChange(what, e) {
        let state = {}, value = e.target.value;

        if (this.validate(what, value) || !value) {
            state[what] = value;
            this.setState(state);
        }
    }

    validate(what, value) {
        if (typeof value === 'undefined') {
            value = this.state[what];
        }

        let error = (!Form.isNumber(value) || !value);

        let state = {};
        state[what + 'Error'] = error ? 'Must be a number' : '';
        this.setState(state);

        return !error;
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
        let unitItems = [
            {
                payload: 'kg',
                text: 'Kg'
            },
            {
                payload: 'lbs',
                text: 'Lbs'
            }
        ];

        let formStyles = {
            marginRight: '10px'
        };

        return (
            <form className="score-form" onSubmit={this.handleSubmit.bind(this)}>
                <Card>
                    <CardText>

                        <SelectField
                            value={this.state.gender}
                            floatingLabelText="Gender"
                            menuItems={genderItems}
                            onChange={this.handleChange.bind(this, 'gender')}
                            style={Object.assign({display: 'block'}, formStyles)}
                            />

                        <TextField
                            floatingLabelText="Body weight"
                            value={this.state.weight}
                            onChange={this.handleNumberChange.bind(this, 'weight')}
                            errorText={this.state.weightError}
                            style={formStyles}
                            />


                        <SelectField
                            value={this.state.unit}
                            floatingLabelText="Unit"
                            menuItems={unitItems}
                            onChange={this.handleChange.bind(this, 'unit')}
                            style={Object.assign({width: '49%', visibility: 'hidden'}, formStyles)}
                            />

                        <TextField
                            floatingLabelText="Squat 1RM"
                            value={this.state.squat}
                            onChange={this.handleNumberChange.bind(this, 'squat')}
                            errorText={this.state.squatError}
                            style={Object.assign({width: '32%'}, formStyles)}
                            />

                        <TextField
                            floatingLabelText="Bench 1RM"
                            value={this.state.bench}
                            onChange={this.handleNumberChange.bind(this, 'bench')}
                            errorText={this.state.benchError}
                            style={Object.assign({width: '32%'}, formStyles)}
                            />

                        <TextField
                            floatingLabelText="Deadlift 1RM"
                            value={this.state.dead}
                            onChange={this.handleNumberChange.bind(this, 'dead')}
                            errorText={this.state.deadError}
                            style={Object.assign({width: '32%'}, formStyles)}
                            />

                        <TextField
                            floatingLabelText="Name (optional)"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this, 'name')}
                            style={Object.assign({display: 'none'}, formStyles)}
                            />

                    </CardText>
                    <CardActions>
                        <FlatButton
                            label="Calculate"
                            primary={true}
                            onClick={this.handleSubmit.bind(this)}
                            style={{marginTop: '20px'}}
                            />
                    </CardActions>
                </Card>
            </form>
        );
    }
}

Form.propTypes = {
    onUserScore: React.PropTypes.func.isRequired
};

