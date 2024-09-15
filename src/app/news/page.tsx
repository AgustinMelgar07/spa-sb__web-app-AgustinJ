import { SimpleHero } from '@/components'
import { NewsSection } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.stable.news

export const metadata: Metadata = {
  title: getTitle(title),
}

const Services = () => (
  <>
    <SimpleHero title={title} />
    <NewsSection />
  </>
)

export default Services
