const { Router } = require("express");
const router = Router();

const Todo = require("../models/todo");

// route koja vraca sve todos iz mongodb-a
router.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// route za nove todos
router.post("/todos/newTodo", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });
  todo.save();
  res.json(todo);
});

router.put("/todos/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(todo);
});

// route za brisat todo pomocu id-a koji se generira u bazi automatski
// findByIdAndDelete je metoda od moongose
router.delete("/todos/:id", async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  res.json(deletedTodo);
});

module.exports = router;
