import React, { Component } from 'react';
import pokemons from '../data'
import PropTypes from 'prop-types'

class Pokemon extends Component {
    render() {
        const { id, name, type, averageWeight, image } = this.props.poks
        return (
            <li className='pokemons'>
              <div className='pokemon-card'>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>Type: {type}</p>
                <p>Average Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
              </div>
              <img id='imagem' alt='' src={image}></img>
            </li>
           
        )
    }
}

Pokemon.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
        value: PropTypes.number.isRequired,
        measurementUnit: PropTypes.string.isRequired
    }),
    image: PropTypes.string.isRequired
}

export default Pokemon;
