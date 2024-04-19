const express = require("express");

const router = express.Router();
const Task = require("../model/taskModel");

//Get All
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//Create One
router.post("/", async (req, res) => {
  const { name, description, completed } = req.body;
  try {
    const task = await Task.create({ name, completed });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//Get one
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//Edit One
router.put("/:id", async (req, res) => {
  const { name, completed } = req.body;
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.name = name;
    task.completed = completed;
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//Delete One
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    await task.destroy();
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
