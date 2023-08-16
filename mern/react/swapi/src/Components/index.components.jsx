import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const StarWarsApi = () => {
  const [resource, setResource] = useState("people");
  const [id, setId] = useState("");
  const [response, setResponse] = useState(null);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${resource}/${id}`);
      navigate(`/${id}`);
      setResponse(response.data);

      const attributes = Object.keys(response.data).slice(0, 4);
      setSelectedAttributes(attributes);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse(null);
      setSelectedAttributes([]);
      setError("Estos no son los droides que estoy buscando");
    }
  };

  return (
    <div>
      <h1>Star Wars API Interface</h1>
      <label htmlFor="resource">Seleccionar recurso:</label>
      <select id="resource" value={resource} onChange={(e) => setResource(e.target.value)}>
        <option value="people">Personajes</option>
        <option value="films">Películas</option>
        <option value="ships">Nave</option>

      </select>
      <label htmlFor="id">ID:</label>
      <input type="number" id="id" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
      <div>
        {error && (
          <div>
            <p>{error}</p>
            <img
              src="/Users/rhayzayepez/Coding-Dojo/mern/react/swapi/src/obi-wan.jpg"
              alt="Obi-Wan Kenobi"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        )}
        {response && (
          <div>
            <h2>Atributos seleccionados:</h2>
            <ul>
              {selectedAttributes.map((attribute, index) => (
                <li key={index}>
                  {attribute}: {response[attribute]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StarWarsApi;
