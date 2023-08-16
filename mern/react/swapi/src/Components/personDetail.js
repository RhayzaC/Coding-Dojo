import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PersonDetail = () => {
const { id } = useParams();
const [person, setPerson] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        setPerson(response.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        setPerson(null);
}
};

    fetchData();
}, [id]);

return (
    <div>
        <h2>Detalles de la persona {id}</h2>
        {person ? (
        <pre>{JSON.stringify(person, null, 2)}</pre>
    ) : (
        <p>No se pudo cargar la información de la persona.</p>
    )}
    </div>
);
};

export default PersonDetail;
