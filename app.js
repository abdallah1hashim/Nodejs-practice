const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "users.html"));
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "main.html"));
});

app.listen(3000);
