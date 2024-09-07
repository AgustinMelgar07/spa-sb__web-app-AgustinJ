import './page.css'
import { SimpleHero } from '@/components'
import { SignUpForm } from './components'
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
    <section>
      <section id="a">
        <SignUpForm />
      </section>
    </section>
  </>
)

export default Login
