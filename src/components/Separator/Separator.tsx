import './Separator.css'
import { type HTMLAttributes } from 'react'
import { classList } from '@/helpers'

interface Props {
  asHr?: boolean
  style?: { invert: boolean }
  handlingClass?: string
}

const Separator = ({
  asHr = false,
  style = { invert: false },
  handlingClass,
}: Props) => {
  const props: HTMLAttributes<HTMLElement> = {
    className: classList(
      'cmp-separator',
      { inverted: style.invert },
      handlingClass
    ),
  }

  return asHr ? <hr {...props} /> : <span {...props} />
}

export default Separator
