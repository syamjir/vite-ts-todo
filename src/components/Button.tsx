type Button = {
  children: JSX.Element | string
  style: string
  onClick?: () => void
}

export function Button({ children, style, onClick }: Button) {
  return (
    <button
      className={`p-2 bg-black rounded-lg border-2 text-lg ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
