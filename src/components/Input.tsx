type Input = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export function Input({ inputValue, setInputValue }: Input) {
  return (
    <input
      className='p-3 rounded-lg text-lg border-2 border-indigo-400'
      type='text'
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      placeholder='Add a new todo...'
    />
  )
}
