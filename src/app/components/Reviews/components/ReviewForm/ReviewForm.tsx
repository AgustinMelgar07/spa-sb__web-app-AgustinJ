import './ReviewForm.css'
import { Banner, Icon, StateButton, TextArea } from '@/components'
import { useState } from 'react'
import { useFetchState, useShowBanner } from '@/hooks'
import { ReviewModel } from '@/models'
import { ReviewService } from '@/services'
import { AppError } from '@/helpers'
import jsonData from '@/data.json'

const { placeholder, thanks } = jsonData.pages.stable.home.sections.reviews

const ReviewForm = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null)
  const [selectedStar, setSelectedStar] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => setHoveredStar(index)
  const handleMouseLeave = () => setHoveredStar(null)
  const handleClick = (index: number) => setSelectedStar(index)

  const { fetchState, handleSubmit } = useFetchState(
    async ({ formData, setLoading, setError, setSuccess }) => {
      await setLoading()

      const createResponse = await ReviewService.create({
        stars: Number(formData.get('stars')) as ReviewModel.StarRating,
        comment: formData.get('comment') as string,
      })

      if (!createResponse || createResponse instanceof AppError) {
        await setError()
      } else {
        await setSuccess()
      }
    }
  )

  const { showBanner } = useShowBanner(fetchState)

  return showBanner ? (
    <Banner text={thanks} />
  ) : (
    <form className="cmp-review-form review" onSubmit={handleSubmit}>
      <header>
        <div className="profile-picture">
          <Icon faIcon="fa-solid fa-user" />
        </div>
        <div className="stars">
          {Array.from({ length: 5 }).map((_, index) => {
            const starIndex = index + 1
            const isFilled = starIndex <= (hoveredStar ?? selectedStar ?? 0)

            return (
              <label
                key={index}
                onMouseEnter={() => handleMouseEnter(starIndex)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(starIndex)}
              >
                <Icon
                  faIcon={isFilled ? 'fa-solid fa-star' : 'fa-regular fa-star'}
                />
                <input
                  title={`${starIndex} estrella/s`}
                  name="stars"
                  type="radio"
                  value={starIndex}
                  required
                />
              </label>
            )
          })}
        </div>
        {selectedStar && <small>({selectedStar})</small>}
      </header>
      <div className="comment">
        <TextArea
          id="comment"
          title="Comentarios"
          placeholder={placeholder}
          required
          hideLabel
        />
      </div>
      <StateButton
        text="Enviar"
        title="Enviar reseña"
        faIcon="fa-solid fa-arrow-right"
        fetchState={fetchState}
      />
    </form>
  )
}

export default ReviewForm
