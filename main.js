const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from potato :)");
});

app.get("*", (req, res) => {
  res.send("Hello World from potato :)\n7");
});

app.listen(8080, () => {
  console.log("working port 8080 :)");
});
