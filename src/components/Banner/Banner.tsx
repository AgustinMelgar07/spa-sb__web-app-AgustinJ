import './Banner.css'
import { Icon } from '..'
import { classList } from '@/helpers'

type BannerType = 'success' | 'no-content'

interface Props {
  type?: BannerType
  text?: string
}

const Banner = ({ type = 'success', text = 'Enviado' }: Props) => {
  const iconMapping: Record<BannerType, JSX.Element> = {
    'no-content': <Icon faIcon="fa-regular fa-face-grin-beam-sweat" />,
    success: <Icon faIcon="fa-solid fa-check" />,
  }

  return (
    <div className={classList('cmp-banner', type)}>
      <p className="text">{text}</p>
      <div className="state-container">{iconMapping[type]}</div>
    </div>
  )
}

export default Banner
