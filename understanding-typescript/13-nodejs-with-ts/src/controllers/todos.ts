import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Todo } from '../models/todo';


const TODOS: Todo[] = []

export const createTodo: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const text = (req.body as { text: string }).text
  const newTodo = new Todo(Math.random().toString(), text)
  TODOS.push(newTodo)

  res.status(201).json({ message: 'created todo', createdTodo: newTodo })
}

export const getTodos: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(201).json({ todos: TODOS })
}

export const updateTodos: RequestHandler<{ id: string }> = (req: Request, res: Response, next: NextFunction) => {
  const todoId = req.params.id
  const updatedText = (req.body as { text: string }).text
  console.log('todoId', todoId, TODOS)
  const todoIndex = TODOS.findIndex(todo => todo.id === todoId)
  if (todoIndex < 0) {
    return res.status(404).json({ message: 'not found' })
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)
  res.status(201).json({ todos: TODOS, updated: TODOS[todoIndex] })
}