import "./App.css";
import React, { useState } from "react";

const PersonCard = (props) => {
  const [age, setAge] = useState(props.age);

  const handleBirthday = () => {
    setAge(age + 1);
  };

  return (
    <div className="person-card">
      <h2>
        {" "}
        {props.lastName}, {props.firstName}{" "}
      </h2>
      <p>Edad: {age}</p>
      <p>Color de cabello: {props.hairColor}</p>
      <button onClick={handleBirthday}>
        ¡Happy Birthay for {props.firstName} {props.lastName}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
      <PersonCard
        lastName="Smith"
        firstName="John"
        age={88}
        hairColor="Brown"
      />
      <PersonCard
        lastName="Filmore"
        firstName="Millard"
        age={50}
        hairColor="Brown"
      />
      <PersonCard
        lastName="Smith"
        firstName="Maria"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
};

export default App;
