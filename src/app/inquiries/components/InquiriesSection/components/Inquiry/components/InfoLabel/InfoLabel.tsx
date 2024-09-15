import './InfoLabel.css'
import { Icon } from '@/components'

export interface Props {
  title: string
  faIcon: string
  value: string
}

const Label = ({ title, faIcon, value }: Props) => (
  <div className="cmp-info-label" title={title}>
    <Icon faIcon={faIcon} />
    <small>{value}</small>
  </div>
)

export default Label
