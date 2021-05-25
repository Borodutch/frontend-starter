import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const root = classnames('container', 'mx-auto', 'pb-10', 'max-w-4xl', 'py-4')
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root
