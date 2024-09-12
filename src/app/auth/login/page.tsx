import { SimpleHero } from '@/components'
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
    <section className="section-form">
      <LoginForm />
    </section>
  </>
)

export default Login
