import './page.css'
import { LinkButton, SimpleHero } from '@/components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title, subtitle, text, link } = jsonData.pages.stable.applyAt

export const metadata: Metadata = {
  title: getTitle(title),
}

const ApplyAt = () => (
  <>
    <SimpleHero title={title} />
    <section className="apply-at">
      <h3>{subtitle}</h3>
      <p className="text">{text}</p>
      <LinkButton
        title={link.title}
        faIcon="fa-solid fa-paper-plane"
        href={`mailto:${link.email}`}
        data-email-sender="true"
      />
    </section>
  </>
)

export default ApplyAt
