import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({  onResourceChange }) {
  const [selectedResource, setSelectedResource] = useState('people'); // Cambio aquí
  const [selectedId, setSelectedId] = useState('');

  const handleResourceChange = (event) => {
    setSelectedResource(event.target.value);
  };

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleSearchClick = () => {
    onResourceChange(selectedResource);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12 mb-3 text-left">
          <p className="didplay-flex fs-5">Search For:</p>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <select className="form-select mb-3" value={selectedResource} onChange={handleResourceChange}>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <input
            type="number"
            className="form-control mb-3"
            placeholder="ID"
            value={selectedId}
            onChange={handleIdChange}
          />
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <Link to={`/${selectedResource}/${selectedId}`} className="btn btn-secondary me-2" onClick={handleSearchClick}>
            Buscar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
