import logo from './logo.svg';
import './App.css';
import React from 'react';

// Definición del componente PersonCard
const PersonCard = (props) => {
  return (
    <div className="person-card">
      <h2> {props.lastName} {props.firstName}</h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  );
};

// Componente principal que utiliza el componente PersonCard
const App = () => {
  return (
    <div>
      <PersonCard
        lastName="Doe,"
        firstName="Jane"
        age={45}
        hairColor="Black"
      />
      <PersonCard
        lastName="Smith,"
        firstName="John"
        age={88}
        hairColor="Brown"
      />
      <PersonCard
        lastName="Filmore,"
        firstName="Millard"
        age={50}
        hairColor="Brown"
      />
      <PersonCard
        lastName="Smith,"
        firstName="Maria"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
};

export default App;
