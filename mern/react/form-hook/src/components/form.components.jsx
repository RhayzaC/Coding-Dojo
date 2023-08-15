import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validaciones//
    if (name === "nombre" && value.length < 2) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        nombre: "El nombre debe tener al menos 2 caracteres.",
      }));
    } else if (name === "apellido" && value.length < 2) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        apellido: "El apellido debe tener al menos 2 caracteres.",
      }));
    } else if (name === "email" && value.length < 5) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "El correo electrónico debe tener al menos 5 caracteres.",
      }));
    } else if (name === "contraseña" && value.length < 8) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        contraseña: "La contraseña debe tener al menos 8 caracteres.",
      }));
    } else if (
      name === "confirmarContraseña" &&
      value !== formData.contraseña
    ) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        confirmarContraseña: "Las contraseñas no coinciden.",
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form>
            <div className="mb-3 bg-light p-3">
              <div className="row justify-content-center">
                <div className="col-md-8 form in-line">
                  <label className="form-label"> First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  {validationErrors.nombre && (
                    <div className="text-danger">{validationErrors.nombre}</div>
                  )}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <label className="form-label"> Last Name: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                  />
                  {validationErrors.apellido && (
                    <div className="text-danger">
                      {validationErrors.apellido}
                    </div>
                  )}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <label className="form-label"> Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {validationErrors.email && (
                    <div className="text-danger">{validationErrors.email}</div>
                  )}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <label className="form-label"> Password: </label>
                  <input
                    type="password"
                    className="form-control"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                  />
                  {validationErrors.contraseña && (
                    <div className="text-danger">
                      {validationErrors.contraseña}
                    </div>
                  )}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <label className="form-label"> Confirm Password: </label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmarContraseña"
                    value={formData.confirmarContraseña}
                    onChange={handleChange}
                  />
                  {validationErrors.confirmarContraseña && (
                    <div className="text-danger">
                      {validationErrors.confirmarContraseña}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
          <div className="mt-4">
            <h5>Your Data:</h5>
            <p>First Name: {formData.nombre}</p>
            <p>Last Name: {formData.apellido}</p>
            <p>Email: {formData.email}</p>
            <p>Password: {formData.contraseña}</p>
            <p>Confirm Password: {formData.confirmarContraseña}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
