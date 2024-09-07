'use client'

import './ReserveForm.css'
import { Button, Input, TextArea } from '@/components'
import { ChangeEventHandler, FormEventHandler, useState, useMemo } from 'react'
import jsonData from '@/data.json'
import { AvailableAppts } from './components'

const { sections } = jsonData.pages.stable.services

const formatDate = (date: Date) => date.toISOString().slice(0, 10)

const ReserveForm = () => {
  const today = useMemo(() => new Date(), [])
  const todayFormatted = useMemo(() => formatDate(today), [today])

  const [date, setDate] = useState(todayFormatted)

  const handleDateChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target
    setDate(value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()
  }

  return (
    <form className="cmp-reserve-form" onSubmit={handleSubmit}>
      <div className="treatments">
        {sections.map(({ title, treatments, serviceKey }) => (
          <fieldset key={serviceKey}>
            <legend>{title}</legend>
            {treatments.map((treatment, index) => {
              const key = [serviceKey, index].join('_')

              return (
                <label key={key} className="text">
                  <input type="radio" name="treatment" value={key} required />
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
      <AvailableAppts date={date} />
      <TextArea id="comment" title="Comentarios" />
      <Button title="Reservar" />
    </form>
  )
}

export default ReserveForm
