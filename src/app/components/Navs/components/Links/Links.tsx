import './Links.css'
import Image from 'next/image'
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
  type?: 'header' | 'aside'
}

const Links = ({ type = 'header' }: Props) => {
  const { data } = useSession()
  const { user } = data || {}

  return (
    <nav className={classList('cmp-links', type)}>
      {stableLinks.map(({ href, title }) => (
        <Link className="page" key={href} href={href}>
          {title}
        </Link>
      ))}
      <Separator style={{ invert: type === 'header' }} />
      {user ? (
        <Link className="highlight profile" href={`/${profile.page}`}>
          <Image
            src={user.profilePhotoUrl}
            alt={`Foto de perfil de ${user.name} ${user.lastName}`}
            width={32}
            height={32}
          />
          {user.name} {user.lastName[0]}.
        </Link>
      ) : (
        <Link className="highlight" href={`/${login.page}`}>
          {login.title}
        </Link>
      )}
    </nav>
  )
}

export default Links
