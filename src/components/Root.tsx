import React, { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const root = classnames('container', 'mx-auto', 'px-4', 'pb-10', 'max-w-4xl')
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root
