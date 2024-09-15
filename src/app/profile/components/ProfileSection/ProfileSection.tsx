import './ProfileSection.css'
import Image from 'next/image'
import { Button, Separator } from '@/components'
import { Label, Props as LabelProps } from './components'
import { signOut, useSession } from 'next-auth/react'
import { UserModel } from '@/models'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.profile

const roleMatcher: Record<UserModel.Role, string> = {
  admin: 'Administrador',
  client: 'Cliente',
  staff: 'Staff',
}

const ProfileSection = () => {
  const { data } = useSession()
  const user = data?.user

  const labels: LabelProps[] | undefined = user && [
    {
      title: 'Nombre',
      faIcon: 'fa-solid fa-n',
      value: user.name,
    },
    {
      title: 'Apellido',
      faIcon: 'fa-solid fa-a',
      value: user.lastName,
    },
    {
      title: 'Tipo',
      faIcon: 'fa-solid fa-user',
      value: roleMatcher[user.role],
    },
  ]

  return (
    user && (
      <section className="profile-section">
        <header>
          <Image
            src={user.profilePhotoUrl}
            alt={`Foto de perfil de ${user.name} ${user.lastName}`}
            width={128}
            height={128}
          />
          <div className="group">
            <h2 className="text">{user.name}</h2>
            <p className="text">Bienvenido de nuevo</p>
          </div>
          <Button
            title="Cerrar sesión"
            faIcon="fa-solid fa-arrow-right-from-bracket"
            onClick={() => signOut()}
          />
        </header>
        <Separator />
        <div className="labels">
          {labels?.map(item => (
            <Label key={item.title} {...item} />
          ))}
        </div>
      </section>
    )
  )
}

export default ProfileSection
