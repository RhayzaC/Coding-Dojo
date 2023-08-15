import React, { useState } from 'react';

const Form = (props) => {
  let [info, setinfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setinfo({
      ...info,
      [key]: value,
    });
  };

  return (
    <div>
      <form style={{ margin: '50px' }}>
        <div style={{backgroundColor: 'lightgray',}}>
          <label className="form-label"> First Name:</label>
          <input type="text" name="firstName" value={info.firstName} onChange={handleChange} 
          style={{ marginBottom: '25px', width: '20%'}} />
        </div>

        <div style={{backgroundColor: 'lightgray',}}>
          <label className="form-label"> Last Name:</label>
          <input type="text" name="lastName" value={info.lastName} onChange={handleChange} 
          style={{ marginBottom: '25px', width: '20%' }} />
        </div>

        <div style={{backgroundColor: 'lightgray',}}>
          <label className="form-label"> Email:</label>
          <input type="email" name="email" value={info.email} onChange={handleChange} 
          style={{ marginBottom: '25px', width: '20%' }} />
        </div>

        <div style={{backgroundColor: 'lightgray',}}>
          <label className="form-label"> Password:</label>
          <input type="password" name="password" value={info.password} onChange={handleChange}
          style={{ marginBottom: '25px', width: '20%' }} />
        </div>

        <div style={{backgroundColor: 'lightgray',}}>
          <label className="form-label"> Confirm Password:</label>
          <input type="password" name="confirmPassword" value={info.confirmPassword} onChange={handleChange}
          style={{ marginBottom: '25px', width: '20%' }}/>
        </div>
      </form>

      <h4>Your Form Data:</h4>
      <p>First Name: {info.firstName}</p>
      <p>Last Name: {info.lastName}</p>
      <p>Email: {info.email}</p>
      <p>Password: {info.password}</p>
      <p>Confirm Password: {info.confirmPassword}</p>
    </div>
  );
};

export default Form;

