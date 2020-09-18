const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.get("/todos", function(req, res) {
  res.json(todos);
});

router.get("/todos/:id", function(req, res) {
  const id = req.params.id
  const todo = todos.find(todo => todo.id === Number(id))

  if (todo) {
    res.json(todo)
    return
  }

  res.json({})
})

module.exports = router;
