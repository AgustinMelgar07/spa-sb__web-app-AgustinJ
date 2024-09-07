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

const SignUp = () => (
  <>
    <SimpleHero title={title} />
    <section className="sign-up section-form">
      <div className="card">
        <SignUpForm />
      </div>
    </section>
  </>
)

export default SignUp
