import React from 'react'
import './TodoList.css'


interface TodoListProps {
  items: { id: string, text: string }[];
  oneDeleteTodo: (id: string) => void
}

// const TodoList: React.FC<TodoListProps> = props => {
const TodoList = ({ items, oneDeleteTodo }: TodoListProps) => {
  return (
    <div>
      <h3>TodoList</h3>
      <ul>
        {items.map(todo => <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => oneDeleteTodo(todo.id)}>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}

export default TodoList