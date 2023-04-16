import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevState => [...prevState, { id: Math.random().toString(), text }])
  }

  const deleteHandler = (todoId: string) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <h1>React couse with typescript</h1>
      <NewTodo onTodoAdd={todoAddHandler} />
      <TodoList items={todos} oneDeleteTodo={deleteHandler} />
    </div>
  );
}

export default App;
