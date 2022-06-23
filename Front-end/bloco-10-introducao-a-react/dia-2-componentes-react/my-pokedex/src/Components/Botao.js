import React, { Component } from 'react';

class Botao extends Component {
    constructor () {
        super()
        
        this.state = {
            numeroCliques: 0
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState((estadoAterior, _props) => ({
            numeroCliques: estadoAterior.numeroCliques + 1
        }))

    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.numeroCliques}</button>
        )
    }
}

export default Botao