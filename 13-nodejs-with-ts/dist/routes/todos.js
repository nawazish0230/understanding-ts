"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos_1 = require("../controllers/todos");
var router = (0, express_1.Router)();
router.post('/', todos_1.createTodo);
router.get('/', todos_1.getTodos);
router.patch('/:id', todos_1.updateTodos);
router.delete('/:id');
exports.default = router;