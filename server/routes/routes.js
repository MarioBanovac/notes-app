const { Router } = require("express");
const router = Router();

const Todo = require("../models/todo");

// route koja vraca sve todos iz mongodb-a
router.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});
