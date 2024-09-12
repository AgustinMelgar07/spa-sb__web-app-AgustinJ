import './Hero.css'
import Image from 'next/image'
import { classList } from '@/helpers'

interface Props {
  handleClass?: string
  children?: React.ReactNode
}

const Hero = ({ handleClass, children }: Props) => (
  <section className={classList('hero', handleClass)}>
    <Image
      src="/hero.webp"
      width={2048}
      height={1162}
      alt=""
      loading="eager"
      priority
    />
    {/* TODO: alt */}
    {children}
  </section>
)

export default Hero
