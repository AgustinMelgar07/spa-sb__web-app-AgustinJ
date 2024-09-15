'use client'

import { SessionProvider } from 'next-auth/react'
import { SimpleHero } from '@/components'
import { InquiriesSection } from './components'
import { Protect } from '@/guards'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.inquiries

const Inquiries = () => (
  <SessionProvider>
    <Protect>
      <SimpleHero title={title} />
      <InquiriesSection />
    </Protect>
  </SessionProvider>
)

export default Inquiries
