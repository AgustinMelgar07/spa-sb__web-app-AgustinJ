import './Links.css'
import Link from 'next/link'
import { Separator } from '@/components'
import { classList, reassemble } from '@/helpers'
import jsonData from '@/data.json'
import { useSession } from 'next-auth/react'

const { pages } = jsonData
const { stable, dynamic } = pages
const { login, profile } = dynamic

const stableLinks = reassemble(stable, (_, { page, title }) => ({
  href: `/${page}`,
  title,
}))

interface Props {
  style?: {
    type?: 'header' | 'aside'
  }
}

const Links = ({ style }: Props) => {
  const { data } = useSession()

  return (
    <nav className={classList('cmp-links', style?.type || 'header')}>
      {stableLinks.map(({ href, title }) => (
        <Link key={href} href={href}>
          {title}
        </Link>
      ))}
      <Separator style={{ invert: (style?.type || 'header') === 'header' }} />
      {data ? (
        <Link className="primary" href={`/${profile.page}`}>
          {data.user.name}
        </Link>
      ) : (
        <Link className="primary" href={`/${login.page}`}>
          {login.title}
        </Link>
      )}
    </nav>
  )
}

export default Links
