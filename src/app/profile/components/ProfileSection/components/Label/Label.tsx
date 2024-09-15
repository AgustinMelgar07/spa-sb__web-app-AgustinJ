import { Icon } from '@/components'
import './Label.css'

export interface Props {
  title: string
  faIcon: string
  value: string
}

const Label = ({ title, faIcon, value }: Props) => (
  <div className="cmp-label">
    <small>{title}</small>
    <div>
      <Icon faIcon={faIcon} />
      <p className="text">{value}</p>
    </div>
  </div>
)

export default Label
