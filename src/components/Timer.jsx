import React, { Component } from 'react';
import { toast } from 'react-toastify';

import ButtonGroup from './ButtonGroup';
import Display from './Display';
import Message from './Message';


class Timer extends Component {
    state = {
        initialValue: 10,
        duration: 10,
        message: '',
        handle: 0
    };

    notify = (text, type) => {
        toast[type](text, { autoClose: 2500 })
    }

    prependZero = value => {
        return value < 10 ? "0" + value.toString() : value.toString();
    }
    
   formatDuration = () => {
        const minutes = Math.floor(this.state.duration / 60);
        const seconds = Math.floor(this.state.duration % 60);
        console.log(minutes);
        return `${this.prependZero(minutes)}:${this.prependZero(seconds)}`;
    }

    componentDidMount() {
        this.setState({
            initialValue: parseInt(this.props.duration, 10) * 60,
            duration: parseInt(this.props.duration, 10) * 60
        })
    }
    

    componentWillUnmount() {
        this.clean();
    }
    

    count = () => {
        this.setState({
            duration: this.state.duration - 1
        });
        if (this.state.duration === 0) {
            this.clean();
        }
    }
    
    clean = (message) => {
        
        clearInterval(this.state.handle);
    
        this.setState({
            message: message
        });
    }

    start = () => {
        const handle = setInterval(()=> {
            this.count()
        }, 1000);

        this.notify('C est parti !', 'success');

        this.setState({
            handle: handle,
            message: ''
        });
    }

    stop = () => {
        this.notify('Compteur en pause !', 'warn');
        this.clean('Pause');
    }

    reset = () => {
        this.notify('...réinitialisation en cours...', 'error');
        this.clean('réinitialisé');

        this.setState({
            duration: this.state.initialValue
        })
    }

    render() {
        return ( 
            <div>
                <Display 
                    title={this.props.title}
                    timerValue={this.formatDuration()}
                />
                <ButtonGroup 
                    onStart={this.start}
                    onStop={this.stop}
                    onReset={this.reset}/>
                <Message 
                    message={this.state.message}/>
            </div>
         );
    }
}

export default Timer;