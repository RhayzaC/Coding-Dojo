import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807');
      const pokemons = response.data.results.map(pokemon => pokemon.name);
      setPokemonList(pokemons);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };
//JSX//
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Pokemon Fetcher</h1>
      <div className="text-center">
        <button className="btn btn-success mb-3" onClick={fetchPokemon}>
          Fetch Pokemon
        </button>
      </div>
      <ul className="list-group text-center">
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="list-group-item">&#8226; {pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;