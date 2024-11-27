import { Items } from '../App'
import { Button } from './Button'
import { FaEdit, FaTrash } from 'react-icons/fa'

type Todo = {
  todoEvent: Items
  handleDelete: (id: string) => void
  handleEdit: (id: string) => void
}

export function Todo({ todoEvent, handleDelete, handleEdit }: Todo) {
  return (
    <div className='flex flex-col w-72  md:w-80 p-2 justify-between  rounded-lg gap-2 items-center border-2  border-indigo-400'>
      <p className='text-lg break-words w-full'>{todoEvent.todo}</p>
      <div className='flex gap-3  '>
        <Button style='border-none' onClick={() => handleEdit(todoEvent.id)}>
          <FaEdit className='text-yellow-300' />
        </Button>
        <Button style='border-none' onClick={() => handleDelete(todoEvent.id)}>
          <FaTrash className='text-blue-300' />
        </Button>
      </div>
    </div>
  )
}
