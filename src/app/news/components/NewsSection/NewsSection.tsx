'use client'

import './NewsSection.css'
import { useEffect, useState } from 'react'
import { Banner } from '@/components'
import { News } from './components'
import { NewsModel } from '@/models'
import { NewsService } from '@/services'
import { AppError } from '@/helpers'

const NewsSection = () => {
  const [news, setNews] = useState<NewsModel.Data[]>()

  useEffect(() => {
    const fetchAsync = async () => {
      const getAllResponse = await NewsService.getAll()

      if (getAllResponse && !(getAllResponse instanceof AppError))
        setNews(getAllResponse)
    }

    fetchAsync()
  }, [])

  return (
    <section className="news-section">
      {!news || news.length === 0 ? (
        <Banner type="no-content" text="Nada por aquí ..." />
      ) : (
        <ul>
          {news.map(item => (
            <News key={item.id} {...item} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default NewsSection
