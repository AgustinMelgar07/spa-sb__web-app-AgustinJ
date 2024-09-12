import { SimpleHero } from '@/components'
import { SignUpForm } from './components'
import { Metadata } from 'next'
import { getTitle } from '@/constants'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.signUp

export const metadata: Metadata = {
  title: getTitle(title),
}

const SignUp = () => (
  <>
    <SimpleHero title={title} />
    <section className="section-form">
      <SignUpForm />
    </section>
  </>
)

export default SignUp
