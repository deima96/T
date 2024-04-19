const express = require("express");
const bodyParser = require("body-parser");
const taskRoute = require("./controller/controller");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/todos", taskRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8000, () => {
  console.log("Server started on http://localhost:8000");
});
