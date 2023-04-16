import React, { useRef } from 'react'
import './NewTodo.css'

interface NewTodoProps {
  onTodoAdd: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onTodoAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;
    console.log('first', enteredText)
    onTodoAdd(enteredText)
  }

  return (
    <form onSubmit={handleSubmitHandler}>
      <label htmlFor="todo-text"></label>
      <input id="todo-text" type="text" ref={inputRef} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo