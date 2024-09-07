import './page.css'
import { LinkButton, SimpleHero } from '@/components'
import { LoginForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.login

export const metadata: Metadata = {
  title: getTitle(title),
}

const Login = () => (
  <>
    <SimpleHero title={title} />
    <section className="login section-form">
      Title
      <div className="card">
        <LoginForm />
        <small>¿No tienes una cuenta?</small>
        <LinkButton
          title="Registrarse"
          href="/auth/sign-up"
          style={{ type: 'secondary' }}
        />
      </div>
    </section>
  </>
)

export default Login
