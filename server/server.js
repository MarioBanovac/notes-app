require("dotenv").config(); // importiranje dotenv za rad sa env varijablama

const express = require("express"); // importiranje express frameworka
const cors = require("cors");
const app = express(); // express instanca

const connectToDb = require("./config/db");

connectToDb(); // funkcija s kojom se spajamo na mongodb

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get(`/`, (req, res) => {
  res.send(`Server je up!`); // provjeravam da li server radi
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
