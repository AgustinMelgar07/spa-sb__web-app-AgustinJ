import './page.css'
import Image from 'next/image'
import { Hero, LinkButton } from '@/components'
import { Reviews, ServiceCard } from './components'
import jsonData from '@/data.json'

const { documentInfo, logo, pages } = jsonData
const { stable, dynamic } = pages
const { home } = stable
const { reserve } = dynamic
const { sections } = home
const { hero, aboutUs, services } = sections
const { phrase } = hero

const Home = () => (
  <>
    <Hero handleClass="home-hero">
      <header>
        <Image
          className="enter-animate"
          src="/logo.svg"
          width={96}
          height={96}
          alt={logo.alt}
          priority
        />
        <h1 className="text enter-animate">{documentInfo.title.base}</h1>
        <p className="text enter-animate">{phrase}</p>
      </header>
      <div className="full-background glass">
        <div className="enter-animate">
          <LinkButton
            title={reserve.title}
            faIcon="fa-regular fa-calendar-check"
            href={reserve.page}
            style={{ size: 'l' }}
          />
          <LinkButton
            title="Descubre más"
            href="#about-us"
            style={{ type: 'secondary', size: 'l' }}
          />
        </div>
      </div>
    </Hero>
    <section className="about-us" id="about-us">
      <Image
        src={`/home/${aboutUs.img.file}`}
        width={1024}
        height={1024}
        alt={aboutUs.img.alt}
      />
      <div>
        <h2>{aboutUs.title}</h2>
        <div className="paragraphs">
          {aboutUs.text.map((paragraph, index) => (
            <p key={index} className="text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
    <section className="services full-background">
      <h2>{services.title}</h2>
      <div className="items">
        {stable.services.sections.map(service => (
          <ServiceCard key={service.serviceKey} {...service} />
        ))}
      </div>
    </section>
    <Reviews />
  </>
)

export default Home
