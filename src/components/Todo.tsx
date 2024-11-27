import { Items } from '../App'
import { Button } from './Button'

type Todo = {
  todoEvent: Items
  handleDelete: (id: string) => void
  handleEdit: (id: string) => void
}

export function Todo({ todoEvent, handleDelete, handleEdit }: Todo) {
  return (
    <div>
      <p>{todoEvent.todo}</p>
      <div>
        <Button style='' onClick={() => handleEdit(todoEvent.id)}>
          Edit
        </Button>
        <Button style='' onClick={() => handleDelete(todoEvent.id)}>
          Delete
        </Button>
      </div>
    </div>
  )
}
