const express = require("express");
const path = require("path");

const app = express();

app.use("/users", (req, res, send) => {
  res.sendFile();
});

app.use("/", (req, res, send) => {
  res.sendFile(path.join(__dir));
});

app.listen("3000");
