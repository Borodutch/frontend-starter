import { FC } from 'react'
import {
  classnames,
  container,
  margin,
  maxWidth,
  padding,
} from 'classnames/tailwind'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('pb-10', 'py-4'),
  maxWidth('max-w-4xl')
)
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root
