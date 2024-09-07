import './SimpleHero.css'
import { Hero } from '..'

interface Props {
  title: string
}

const SimpleHero = ({ title }: Props) => (
  <Hero handleClass="simple-hero">
    <h1 className="text">{title}</h1>
  </Hero>
)

export default SimpleHero
