import React, { useState } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=807');
      const data = await response.json();
      const pokemons = data.results.map(pokemon => pokemon.name);
      setPokemonList(pokemons);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"> Pokemon Fetcher</h1>
      <div className="text-center">
        <button className="btn btn-success mb-3" onClick={fetchPokemon}>
          Fetch Pokemon
        </button>
      </div>
      <ul className="list-group">
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="list-group-item">{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;