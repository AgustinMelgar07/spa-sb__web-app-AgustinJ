import { classList } from '@/helpers'
import './Loader.css'

export interface Props {
  handlingClass?: string
}

const Loader = ({ handlingClass }: Props) => (
  <span className={classList('cmp-loader', handlingClass)} />
)

export default Loader
