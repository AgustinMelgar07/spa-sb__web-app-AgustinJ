'use client'

import './InquireForm.css'
import { Banner, Input, StateButton, TextArea } from '@/components'
import { useFetchState, useShowBanner } from '@/hooks'
import { InquiryService } from '@/services'
import { AppError } from '@/helpers'
import jsonData from '@/data.json'

const { form, thanks } = jsonData.pages.stable.inquire
const { button, title } = form

const InquireForm = () => {
  const { fetchState, handleSubmit } = useFetchState(
    async ({ formData, setLoading, setError, setSuccess }) => {
      await setLoading()

      const createResponse = await InquiryService.create({
        name: formData.get('name') as string,
        lastName: formData.get('lastName') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        desc: formData.get('desc') as string,
      })

      if (createResponse instanceof AppError) {
        await setError()
      } else {
        await setSuccess()
      }
    }
  )

  const { showBanner } = useShowBanner(fetchState)

  return showBanner ? (
    <Banner text={thanks} />
  ) : (
    <div className="cmp-consult-form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <Input id="name" title="Nombre" required />
        <Input id="lastName" title="Apellido" required />
        <Input
          id="phone"
          title="Teléfono"
          type="tel"
          // TODO: test del formato
          pattern="\+54[0-9]{11}"
          placeholder="+54___________"
        />
        <Input id="email" title="Correo electrónico" type="email" required />
        <TextArea id="desc" title="Consulta" required />
        <StateButton text={button} title={button} fetchState={fetchState} />
      </form>
    </div>
  )
}

export default InquireForm
