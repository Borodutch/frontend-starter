import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

type ButtonProps = {
  onClick: () => void
  title: string
}

const button = classnames(
  'bg-transparent',
  'hover:bg-blue-500',
  'text-blue-700',
  'font-semibold',
  'hover:text-white',
  'py-2',
  'px-4',
  'border',
  'border-blue-500',
  'hover:border-transparent',
  'rounded',
  'focus:outline-none',
  'mx-1'
)
const Button: FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button className={button} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
