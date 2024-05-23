const express = require("express");
const app = express();

app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(3000, () => {
  console.log("Servidor iniciado");
});
