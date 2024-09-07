import './Section.css'
import { Separator } from '@/components'
import { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

const Section = ({ title, children }: Props) => (
  <section className="cmp-section">
    <h4>{title}</h4>
    <Separator />
    {children}
  </section>
)

export default Section
