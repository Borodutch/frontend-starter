import { FC } from 'react'
import {
  classnames,
  fontSize,
  fontWeight,
  margin,
  textAlign,
  textColor,
} from 'classnames/tailwind'

const whiteText = classnames(textColor('text-white'))
const grayText = classnames(textColor('text-gray-300'))

const headerText = classnames(
  whiteText,
  fontSize('text-3xl', 'md:text-6xl'),
  fontWeight('font-bold'),
  textAlign('text-center'),
  margin('mb-6')
)
export const HeaderText: FC = ({ children }) => {
  return <p className={headerText}>{children}</p>
}

const subheaderText = classnames(
  whiteText,
  fontSize('text-xl', 'md:text-2xl'),
  fontWeight('font-bold'),
  textAlign('text-center'),
  margin('my-12')
)
export const SubheaderText: FC = ({ children }) => {
  return <p className={subheaderText}>{children}</p>
}

const bodyText = classnames(grayText, textAlign('text-center'))
export const BodyText: FC = ({ children }) => {
  return <p className={bodyText}>{children}</p>
}
