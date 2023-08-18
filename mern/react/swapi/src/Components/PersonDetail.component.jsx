import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PersonDetail() {
    const { id } = useParams();
    const [person, setPerson] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    console.log('ID:', id);
    axios.get(`https://swapi.dev/api/people/${id}/`)
    .then(response => {
        setPerson(response.data);
        setLoading(false);
    })
    
    .catch(error => {
        console.error('Error fetching data:', error);
        setPerson({});
        setLoading(false);
    });
}, [id]);

return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-8">
                {loading ? (
            <p>Loading...</p>
            ) : (
            <div>
                <h2>{person.name}</h2>
                <p>Height: {person.height}</p>
                <p>Hair Color: {person.hair_color}</p>
                <p>Birth Year: {person.birth_year}</p>
                <p>Homeworld: {person.homeworld}</p>
            </div>
        )}
        </div>
    </div>
</div>
);
}

export default PersonDetail;
