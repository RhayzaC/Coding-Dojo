const express = require("express");
const faker = require("faker");

const app = express();
const PORT = 8000;

// Endpoint para obtener un usuario aleatorio
app.get("/user", (req, res) => {
    const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumber(),
};

    res.json(user);
});

// Endpoint para obtener una compañía aleatoria
app.get("/company", (req, res) => {
    const company = {
    name: faker.company.companyName(),
    industry: faker.company.catchPhrase(),
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumber(),
};

    res.json(company);
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
