const mongoose = require("mongoose");

const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
