const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World sup!");
});

app.get("/teapot", (req, res) => {
  res.set("X-full-stack", "4life");
  res.status(418);
  res.send("I'm a teapot");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
