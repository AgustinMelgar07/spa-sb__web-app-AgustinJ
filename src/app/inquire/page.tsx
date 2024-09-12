import { SimpleHero } from '@/components'
import { InquireForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.stable.inquire

export const metadata: Metadata = {
  title: getTitle(title),
}

const Inquiry = () => (
  <>
    <SimpleHero title={title} />
    <section className="section-form">
      <InquireForm />
    </section>
  </>
)

export default Inquiry
