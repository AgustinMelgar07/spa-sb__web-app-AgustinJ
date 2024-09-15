import './LinkButton.css'
import Link from 'next/link'
import { Icon } from '..'
import { classList } from '@/helpers'
import { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  faIcon?: string
  href: string
  style?: {
    type?: 'primary' | 'secondary'
    size?: 's' | 'm' | 'l'
  }
}

const LinkButton = ({ title, faIcon, href, style }: Props) => (
  <Link
    className={classList(
      'cmp-link-button',
      'button-look',
      style?.type || 'primary',
      style?.size || 'm'
    )}
    href={href}
  >
    {title}
    {faIcon && <Icon faIcon={faIcon} />}
  </Link>
)

export default LinkButton
