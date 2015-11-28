import React from 'react';

export default class Score extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.weight}kg</td>
                <td>{this.props.squat}kg</td>
            </tr>
        );
    }
}


