const mongoose = require("mongoose");
const db_name = "chistes";

mongoose.
connect(`mongodb://127.0.0.1:27017/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log(`Successfully connected to ${db_name} database`))
.catch((err) => console.log(`Error connecting to ${db_name} database`, err));