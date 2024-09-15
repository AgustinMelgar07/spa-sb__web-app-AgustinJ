import './Inquiry.css'
import { Banner, Icon, StateButton, TextArea } from '@/components'
import { InfoLabel, Props as InfoLabelProps } from './components'
import { useFetchState, useShowBanner } from '@/hooks'
import { InquiryModel } from '@/models'
import { InquiryService } from '@/services'
import { format } from '@formkit/tempo'
import { addIfExist, AppError } from '@/helpers'

const Inquiry = ({
  id,
  name,
  lastName,
  email,
  phone,
  desc,
  createdAt,
}: InquiryModel.Data) => {
  const { fetchState, handleSubmit } = useFetchState(
    async ({ formData, setLoading, setError, setSuccess }) => {
      await setLoading()

      const answerResponse = await InquiryService.answer(
        { id },
        { answer: formData.get('answer') as string }
      )

      if (!answerResponse || answerResponse instanceof AppError) {
        await setError()
      } else {
        await setSuccess()
      }
    }
  )

  const { showBanner } = useShowBanner(fetchState)

  const infoLabels = addIfExist<InfoLabelProps>([
    phone && {
      title: 'Teléfono',
      faIcon: 'fa-solid fa-phone',
      value: phone,
    },
    {
      title: 'Email',
      faIcon: 'fa-solid fa-envelope',
      value: email,
    },
    {
      title: 'Fecha',
      faIcon: 'fa-solid fa-calendar',
      value: format(createdAt, { date: 'medium', time: 'short' }),
    },
  ])

  return showBanner ? (
    <Banner type="success" />
  ) : (
    <li className="inquiry">
      <article className="review">
        <header>
          <div className="profile-picture">
            <Icon faIcon="fa-solid fa-user" />
          </div>
          <p>
            {name} {lastName}
          </p>
          <div className="info">
            {infoLabels.map(item => (
              <InfoLabel key={item.title} {...item} />
            ))}
          </div>
        </header>
        <div className="comment">
          <p className="text">{desc}</p>
        </div>
      </article>
      <form onSubmit={handleSubmit}>
        <TextArea id="answer" title="Respuesta" required />
        <StateButton
          text="Enviar"
          title="Enviar respuesta"
          faIcon="fa-solid fa-arrow-right"
          fetchState={fetchState}
        />
      </form>
    </li>
  )
}

export default Inquiry
