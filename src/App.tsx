import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Todo } from './components/ToDo'

export type Items = {
  todo: string
  id: string
}

export function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [items, setItems] = useState<Items[]>([])
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editId, setEditId] = useState<string | null>(null)

  // Add/edit todo
  function handleAddTodo(id: string | null, event: React.FormEvent) {
    event.preventDefault()
    if (inputValue) {
      if (id === null) {
        // Add new todo
        setItems((prev) => [
          ...prev,
          { todo: inputValue, id: Date.now().toString() },
        ])
      } else {
        // Edit existing todo
        setItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, todo: inputValue } : item,
          ),
        )
      }
      setInputValue('')
      setIsEdit(false)
      setEditId(null)
    }
  }

  // Delete todo
  function handleDeleteTodo(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  // Direct to Edit todo
  function handleEditTodo(id: string) {
    const editTodo = items.find((item) => item.id === id)
    if (editTodo) {
      setInputValue(editTodo.todo)
      setIsEdit(true)
      setEditId(id)
    }
  }

  return (
    <div>
      <Header />
      <form onSubmit={(e) => handleAddTodo(editId, e)}>
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <Button style=''>{isEdit ? 'Edit Todo' : 'Add Todo'}</Button>
      </form>
      <div>
        {items.map((item) => (
          <Todo
            key={item.id}
            todoEvent={item}
            handleDelete={handleDeleteTodo}
            handleEdit={handleEditTodo}
          />
        ))}
      </div>
    </div>
  )
}
