import React, { Component } from 'react'
import { render } from 'react-dom'

class Message extends Component {
    render() {
        return (
            <div>{this.props.message}</div>
        );
    }
}

export default Message;