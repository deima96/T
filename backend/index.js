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
// const corsOptions = {
//   origin: "http://localhost:3000", // Allow a specific origin
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

app.listen(8000, () => {
  console.log("Server started on http://localhost:8000");
});
