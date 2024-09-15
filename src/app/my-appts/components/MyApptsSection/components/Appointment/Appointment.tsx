import './Appointment.css'
import { Icon, Separator } from '@/components'
import { classList } from '@/helpers'
import { AppointmentModel } from '@/models'
import { format } from '@formkit/tempo'
import jsonData from '@/data.json'

const { sections } = jsonData.pages.stable.services

const treatments = sections.flatMap(section => section.treatments)

const stateMatcher: Record<AppointmentModel.State, string> = {
  pending: 'Pendiente',
  cancelled: 'Cancelado',
  completed: 'Completado',
}

const Appointment = ({
  idTreatment,
  date,
  hour,
  comments,
  state,
  createdAt,
}: AppointmentModel.Data) => {
  const infoLabels = [
    {
      title: 'Tratamiento',
      value: treatments[idTreatment - 1].title,
      highlight: true,
    },
    {
      title: 'Fecha del pedido',
      value: format(createdAt, { date: 'short', time: 'short' }),
    },
  ]

  return (
    <li className="appointment">
      <small className={state}>{stateMatcher[state]}</small>
      <div>
        <header>
          <Icon faIcon="fa-regular fa-calendar" />
          <h2 className="text">
            {format(`${date}T${hour}`, { date: 'medium', time: 'short' })}
          </h2>
        </header>
        <Separator />
        <div className="info">
          {infoLabels.map(({ title, value, highlight = false }) => (
            <div className={classList('item', { highlight })} key={title}>
              <small>{title}:</small>
              <small className="value">{value}</small>
            </div>
          ))}
        </div>
        {comments && (
          <div className="comments">
            <small>Comentario enviado:</small>
            <p className="text">{comments}</p>
          </div>
        )}
      </div>
    </li>
  )
}

export default Appointment
