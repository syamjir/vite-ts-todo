type Input = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export function Input({ inputValue, setInputValue }: Input) {
  return (
    <input
      type='text'
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  )
}
