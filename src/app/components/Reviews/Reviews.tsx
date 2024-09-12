'use client'

import './Reviews.css'
import { ReviewModel } from '@/models'
import { ReviewService } from '@/services'
import { Banner, Separator } from '@/components'
import { Review, ReviewForm } from './components'
import { useEffect, useState } from 'react'
import { AppError } from '@/helpers'
import jsonData from '@/data.json'

const { reviews } = jsonData.pages.stable.home.sections

const Reviews = () => {
  const [bestReviews, setBestReviews] = useState<ReviewModel.Data[]>()

  useEffect(() => {
    const fetchAsync = async () => {
      const bestReviewsData = await ReviewService.getTheBest()

      if (bestReviewsData && !(bestReviewsData instanceof AppError))
        setBestReviews(bestReviewsData)
    }

    fetchAsync()
  }, [])

  return (
    <section className="reviews">
      <h2 className="text">{reviews.title}</h2>
      {!bestReviews || bestReviews.length === 0 ? (
        <Banner type="no-content" text="Nada por aquí ..." />
      ) : (
        <ul>
          {bestReviews.map(review => (
            <Review key={review.id} {...review} />
          ))}
        </ul>
      )}
      <Separator />
      <article>
        <h3>{reviews.subtitle}</h3>
        <ReviewForm />
      </article>
    </section>
  )
}

export default Reviews
