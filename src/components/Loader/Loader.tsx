import './Loader.css'
import { classList } from '@/helpers'

export interface Props {
  handlingClass?: string
}

const Loader = ({ handlingClass }: Props) => (
  <span className={classList('cmp-loader', handlingClass)} />
)

export default Loader
