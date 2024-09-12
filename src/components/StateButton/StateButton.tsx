import './StateButton.css'
import { Icon, Loader } from '..'
import { FetchState } from '@/hooks'
import { classList } from '@/helpers'

interface Props {
  text?: string
  title: string
  faIcon?: string
  fetchState: FetchState
}

const StateButton = ({
  text,
  title,
  faIcon = 'fa-solid fa-arrow-right',
  fetchState,
}: Props) => (
  <button
    className="cmp-state-button button-look"
    title={title}
    disabled={fetchState !== 'ready'}
  >
    <Loader handlingClass={classList({ active: fetchState === 'loading' })} />
    <Icon
      faIcon="fa-solid fa-xmark"
      handlingClass={classList({ active: fetchState === 'error' })}
    />
    <Icon
      faIcon="fa-solid fa-check"
      handlingClass={classList({ active: fetchState === 'success' })}
    />
    <div className={classList('body', { active: fetchState === 'ready' })}>
      {text}
      <Icon faIcon={faIcon} />
    </div>
  </button>
)

export default StateButton
