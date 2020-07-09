import React, { Component } from 'react'

class Display extends Component {

    render() {
        return (
            <React.Fragment >
            <h1 style={{marginLeft: 15}}>{this.props.title}</h1>
            <h2 style={{marginLeft: 15}}>Durée restante : {this.props.timerValue}</h2>
            </React.Fragment >
         );
    }
}
export default Display;