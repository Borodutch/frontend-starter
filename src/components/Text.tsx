import {
  classnames,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const whiteText = classnames(textColor('text-white'))
const grayText = classnames(textColor('text-gray-300'))

const headerText = classnames(
  whiteText,
  fontSize('text-3xl', 'md:text-6xl'),
  fontWeight('font-bold'),
  textAlign('text-center')
)
export function HeaderText({ children }: ChildrenProp) {
  return <p className={headerText}>{children}</p>
}

const bodyText = classnames(grayText, textAlign('text-center'))
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}
