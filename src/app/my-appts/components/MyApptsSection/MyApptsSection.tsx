import './MyApptsSection.css'
import { useEffect, useState } from 'react'
import { Banner } from '@/components'
import { Appointment } from './components'
import { AppointmentModel } from '@/models'
import { AppointmentService } from '@/services'
import { AppError } from '@/helpers'

const MyApptsSection = () => {
  const [appts, setPendingInquiries] = useState<AppointmentModel.Data[]>()

  useEffect(() => {
    const fetchAsync = async () => {
      const myApptsResponse = await AppointmentService.myAppts()

      if (myApptsResponse && !(myApptsResponse instanceof AppError))
        setPendingInquiries(myApptsResponse)
    }

    fetchAsync()
  }, [])

  return (
    <section className="my-appts-section">
      {!appts || appts.length === 0 ? (
        <Banner type="no-content" text="Nada por aquí ..." />
      ) : (
        <ul>
          {appts.map(item => (
            <Appointment key={item.id} {...item} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default MyApptsSection
