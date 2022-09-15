const express = require("express");
const app = express();
const product = require("./routes");
const port = 8000;
const cors = require("cors");

try {
  app.use(cors());
  app.use("/products", product);
  app.get("/", (req, res) => {
    res.send({
      statusCode: 200,
      message: "Welcome to Backend",
    });
  });
  app.listen(port, () => console.log(`Listening at port ${port}..`));
} catch (err) {
  console.log("Error occoured", err.message);
}
