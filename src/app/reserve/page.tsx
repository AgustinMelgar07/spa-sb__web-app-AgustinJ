import './page.css'
import { SimpleHero } from '@/components'
import { ReserveForm } from './components'
import { protectRoute } from '@/guards'
import { getTitle } from '@/constants'
import { Metadata } from 'next'
import jsonData from '@/data.json'

const { title } = jsonData.pages.dynamic.reserve

export const metadata: Metadata = {
  title: getTitle(title),
}

const Reserve = async () => {
  await protectRoute()

  return (
    <>
      <SimpleHero title={title} />
      <section className="reserve section-form size-l">
        <div className="card">
          <ReserveForm />
        </div>
      </section>
    </>
  )
}

export default Reserve
