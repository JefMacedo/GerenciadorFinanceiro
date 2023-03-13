const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

require("./routes/indexRoutes")(app);

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001 em http://localhost:3001/.");
});