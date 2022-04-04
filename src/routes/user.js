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

routes.put("/", async (req, res) => {
  try {
    const { uid, name, birthDate, photo } = req.body;
    if (!uid) {
      return res.status(400).end();
    }
    return res.json(await userController.update(uid, name, birthDate, photo));
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
});

routes.delete("/:uid", async (req, res) => {
  try {
    const uid = req.params.uid;
    if (!uid) {
      return res.status(400).end();
    }
    return res.json(await userController.delete(uid));
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
});

module.exports = routes;
