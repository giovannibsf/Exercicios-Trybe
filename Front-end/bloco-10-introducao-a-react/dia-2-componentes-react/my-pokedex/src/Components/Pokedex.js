import React, { Component } from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
    render() {
        return(
            <ol className="pokemon-list">{
              pokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} poks={ pokemon } />
              ))
    }
            </ol>

        )
    }
}

export default Pokedex;
