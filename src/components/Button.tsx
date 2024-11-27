type Button = {
  children: JSX.Element | string
  style: string
  onClick?: () => void
}

export function Button({ children, style, onClick }: Button) {
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  )
}
