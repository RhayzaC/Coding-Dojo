import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation.component';

function IndexPage() {
    const { resource, id } = useParams();
    const [selectedResource, setSelectedResource] = useState('people');
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedAttribute, setSelectedAttribute] = useState('name');
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${resource}/${id}/`)
        .then(response => {
            setDetail(response.data);
            setLoading(false);
            setError(false);
    })
        .catch(error => {
            console.error('Error fetching data:', error);
            setDetail({});
            setLoading(false);
            setError(true);

    });
}, [resource, id]);
    
    const handleAttributeChange = (attribute) => {
        setSelectedAttribute(attribute);
};

return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-4">
                < Navigation 
                    selectedResource={resource}
                    onResourceChange={handleAttributeChange}
                />
            </div>
            <div className="col-md-8">
                {loading ? (
                <p>Loading...</p>
                ) : error ? (
                <div className="d-flex align-items-center flex-column">
                    <p>Estos no son los droides que estás buscando</p>
                    <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/05/obi-wan-kenobi-2323059.jpg?tf=2048x"
                    alt="Obi-Wan Kenobi" 
                    className ="img-fluid"/>
                </div>
                
            ) : (
                
                <div>
                    <h2>{detail.name || detail.title}</h2>
                    <p>Height: {detail.height}</p>
                    <p>Hair Color: {detail.hair_color}</p>
                    <p>Birth Year: {detail.birth_year}</p>
                    <p>Homeworld: {detail.homeworld}</p>
                </div>
        )}
        </div>
    </div>
</div>
);
}

export default IndexPage;
