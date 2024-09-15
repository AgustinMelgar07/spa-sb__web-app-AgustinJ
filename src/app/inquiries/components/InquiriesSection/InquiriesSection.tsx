import './InquiriesSection.css'
import { useEffect, useState } from 'react'
import { Banner } from '@/components'
import { Inquiry } from './components'
import { InquiryModel } from '@/models'
import { InquiryService } from '@/services'
import { AppError } from '@/helpers'

const InquiriesSection = () => {
  const [pendingInquiries, setPendingInquiries] =
    useState<InquiryModel.Data[]>()

  useEffect(() => {
    const fetchAsync = async () => {
      const getPendingResponse = await InquiryService.getPending()

      if (getPendingResponse && !(getPendingResponse instanceof AppError))
        setPendingInquiries(getPendingResponse)
    }

    fetchAsync()
  }, [])

  return (
    <section className="inquiries-section">
      {!pendingInquiries || pendingInquiries.length === 0 ? (
        <Banner type="no-content" text="Nada por aquí ..." />
      ) : (
        <ul>
          {pendingInquiries.map(item => (
            <Inquiry key={item.id} {...item} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default InquiriesSection
