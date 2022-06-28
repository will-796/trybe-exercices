import React, { Component } from "react";
import pokemons from "../data/data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return (
      <div>
        {pokemons.map((element) => (
          <Pokemon
            key={element.id} 
            name={element.name}
            type={element.type}
            averageWeight={element.averageWeight}
            image={element.image}
          />
        ))}
      </div>
    );
  }
}

export default Pokedex;
