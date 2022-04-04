const express = require("express");
const routes = express.Router();

const userController = require("../controllers/user");

routes.get("/", async (req, res) => {
  try {
    return res.json(await userController.getAll());
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
});

routes.post("/", async (req, res) => {
  try {
    const { name, birthDate, photo } = req.body;
    if (!name || !birthDate || !photo) {
      return res.status(400).end();
    }
    return res.json(await userController.add(name, birthDate, photo));
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
});

module.exports = routes;
