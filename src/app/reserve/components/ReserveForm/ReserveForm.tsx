'use client'

import './ReserveForm.css'
import { ChangeEventHandler, useState, useMemo, useEffect } from 'react'
import { Banner, Input, Loader, StateButton, TextArea } from '@/components'
import { useFetchState, useShowBanner } from '@/hooks'
import { AppointmentService } from '@/services'
import { WORK_HOURS } from '@/constants'
import { AppError } from '@/helpers'
import { format } from '@formkit/tempo'
import jsonData from '@/data.json'

const { stable, dynamic } = jsonData.pages
const { sections } = stable.services
const { form, thanks } = dynamic.reserve
const { title, button, noWeekendWork } = form

const formatDate = (date: Date) => date.toISOString().slice(0, 10)

const ReserveForm = () => {
  const today = useMemo(() => new Date(), [])
  const todayFormatted = useMemo(() => formatDate(today), [today])

  const [date, setDate] = useState(todayFormatted)

  const handleDateChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target
    setDate(value)
  }

  const [availableHours, setAvailableHours] = useState<string[]>()
  const [selectedWeekend, setSelectedWeekend] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const selectedDate = new Date(date)

    // Restar un día
    selectedDate.setDate(selectedDate.getDate() + 1)

    // Verificar si es fin de semana (0 = domingo, 6 = sábado)
    const isWeekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6

    setSelectedWeekend(isWeekend)

    if (isWeekend) return

    const fetchAsync = async () => {
      setLoading(true)

      const getBusyResponse = await AppointmentService.getBusy({ date })

      if (!getBusyResponse || getBusyResponse instanceof AppError) {
        setAvailableHours(WORK_HOURS)
      } else {
        const { occupiedHours } = getBusyResponse

        // Filtrar horas disponibles
        const available = WORK_HOURS.filter(
          hour => !occupiedHours.includes(hour)
        )

        setAvailableHours(available)
      }

      setLoading(false)
    }

    fetchAsync()
  }, [date])

  const { fetchState, handleSubmit } = useFetchState(
    async ({ formData, setLoading, setError, setSuccess }) => {
      await setLoading()

      const createResponse = await AppointmentService.create({
        idTreatment: Number(formData.get('treatment') as string),
        date: formData.get('date') as string,
        hour: formData.get('hour') as string,
        comments: formData.get('comments') as string,
      })

      if (!createResponse || createResponse instanceof AppError) {
        await setError()
      } else {
        await setSuccess()
      }
    }
  )

  const { showBanner } = useShowBanner(fetchState)

  let idTreatment = 0

  return showBanner ? (
    <Banner text={thanks} />
  ) : (
    <div className="cmp-reserve-form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="treatments">
          {sections.map(({ title, treatments, serviceKey }) => (
            <fieldset key={serviceKey}>
              <legend>{title}</legend>
              {treatments.map(treatment => {
                idTreatment++

                return (
                  <label key={idTreatment} className="text radio">
                    <input
                      type="radio"
                      name="treatment"
                      value={idTreatment}
                      required
                    />
                    {treatment.title}
                  </label>
                )
              })}
            </fieldset>
          ))}
        </div>
        <Input
          id="date"
          title="Fecha"
          type="date"
          required
          value={date}
          min={todayFormatted}
          onChange={handleDateChange}
        />
        <div className="available-hours">
          {selectedWeekend ? (
            <p className="text">{noWeekendWork}</p>
          ) : loading ? (
            <Loader />
          ) : (
            availableHours?.map(hour => (
              <label key={hour} className="text radio">
                <input type="radio" name="hour" value={hour} required />
                {format('2000-01-01T' + hour, { time: 'short' })}
              </label>
            ))
          )}
        </div>
        <TextArea id="comments" title="Comentarios" />
        <StateButton text={button} title={button} fetchState={fetchState} />
      </form>
    </div>
  )
}

export default ReserveForm
