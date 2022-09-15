const express = require("express");
const router = express.Router();
const {
  getAllId,
  getAllData,
  getSpecificData,
  getAllTypes,
  getChartData,
} = require("./controller");

try {
  router.get("/getAllData", (req, res) => {
    const data = getAllData();
    if (data) {
      res.send({
        statusCode: 200,
        message: data,
      });
    } else {
      res.send({
        statusCode: 400,
        message: "Unknown Error",
      });
    }
  });

  router.get("/getAllId", (req, res) => {
    const data = getAllId();
    if (data) {
      res.send({
        statusCode: 200,
        message: data,
      });
    } else {
      res.send({
        statusCode: 400,
        message: "Unknown Error",
      });
    }
  });

  router.get("/getData/:id", (req, res) => {
    const data = getSpecificData(req.params.id);
    if (data) {
      res.send({
        statusCode: 200,
        message: data,
      });
    } else {
      res.send({
        statusCode: 400,
        message: "Unknown Error",
      });
    }
  });

  router.get("/getAllType", (req, res) => {
    const data = getAllTypes();
    if (data) {
      res.send({
        statusCode: 200,
        message: data,
      });
    } else {
      res.send({
        statusCode: 400,
        message: "Unknown Error",
      });
    }
  });

  router.get("/getChartData", (req, res) => {
    const data = getChartData();
    if (data) {
      res.send({
        statusCode: 200,
        message: data,
      });
    } else {
      res.send({
        statusCode: 400,
        message: "Unknown Error",
      });
    }
  });
} catch (err) {
  console.log("Error", err.message);
}

module.exports = router;
