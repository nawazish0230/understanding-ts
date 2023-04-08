"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var TODOS = [];
var createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'created todo', createdTodo: newTodo });
};
exports.createTodo = createTodo;
var getTodos = function (req, res, next) {
    res.status(201).json({ todos: TODOS });
};
exports.getTodos = getTodos;
var updateTodos = function (req, res, next) {
    var todoId = req.params.id;
    var updatedText = req.body.text;
    console.log('todoId', todoId, TODOS);
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        return res.status(404).json({ message: 'not found' });
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.status(201).json({ todos: TODOS, updated: TODOS[todoIndex] });
};
exports.updateTodos = updateTodos;
