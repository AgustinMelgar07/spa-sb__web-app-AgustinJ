import './Button.css'
import { Icon } from '..'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  faIcon?: string
  hideText?: boolean
}

const Button = ({ title, faIcon, hideText, children, ...rest }: Props) => (
  <button className="cmp-button button-look" title={title} {...rest}>
    {!hideText && title}
    {faIcon && <Icon faIcon={faIcon} />}
    {children}
  </button>
)

export default Button
