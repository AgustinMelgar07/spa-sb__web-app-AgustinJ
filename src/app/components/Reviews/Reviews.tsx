'use client'

import './Reviews.css'
import { Separator } from '@/components'
import { Review, ReviewForm } from './components'
import { useEffect } from 'react'
import jsonData from '@/data.json'
import { publicInstance } from '@/helpers'

const { reviews } = jsonData.pages.stable.home.sections

const betterReviews = [
  {
    id: 1,
    rating: 5,
    comment:
      'Un oasis en la ciudad. El servicio fue impecable y me fui sintiéndome completamente renovada.',
  },
  {
    id: 2,
    rating: 5,
    comment:
      'Desde que entré, me sentí en otro mundo. El personal fue muy atento, y la experiencia completa fue increíble.',
  },
  {
    id: 3,
    rating: 4,
    comment:
      'Muy buena experiencia, me fui con una sensación de paz total. Las instalaciones son excelentes y el personal muy profesional.',
  },
  {
    id: 4,
    rating: 4,
    comment:
      'Disfruté mucho mi visita al SPA. Los tratamientos fueron muy buenos y el ambiente es perfecto para desconectar.',
  },
]

const Reviews = () => {
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await publicInstance.get('/reviews')

      console.log(response)
    }

    fetchReviews()
  }, [])

  return (
    <section className="reviews">
      <h2>{reviews.title}</h2>
      <ul>
        {betterReviews.map(({ id, rating, comment }) => (
          <Review key={id} rating={rating} comment={comment} />
        ))}
      </ul>
      <Separator />
      <article>
        <h3>{reviews.subtitle}</h3>
        <ReviewForm />
      </article>
    </section>
  )
}

export default Reviews
