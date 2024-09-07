import './not-found.css'
import { Hero } from '@/components'
import { getTitle } from '@/constants'
import { Metadata } from 'next'
import jsonData from '@/data.json'

const { title, text } = jsonData.pages.dynamic.notFound.hero

export const metadata: Metadata = {
  title: getTitle(title),
}

const NotFound = () => (
  <Hero handleClass="not-found">
    <h1 className="text">{title}</h1>
    <p className="text full-background glass">{text}</p>
  </Hero>
)

export default NotFound
