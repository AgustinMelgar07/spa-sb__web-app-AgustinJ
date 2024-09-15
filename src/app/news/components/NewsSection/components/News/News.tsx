import './News.css'
import { Separator } from '@/components'
import { NewsModel } from '@/models'
import { format } from '@formkit/tempo'

const News = ({ title, content, imgUrl, createdAt }: NewsModel.Data) => {
  // Separar por uno o más saltos de línea
  const paragraphs = content.split(/\n+/)

  return (
    <li className="news">
      <img
        // src={imgUrl}
        src={'https://www.hvs.com/webcontent/images/assets/specific/spa1.jpg'}
        width={400}
        height={400}
        loading="lazy"
      />
      <div>
        <header>
          <h2 className="text">{title}</h2>
          <small className="text">
            {format(createdAt, { date: 'medium' })}
          </small>
        </header>
        <Separator />
        <div className="paragraphs">
          {paragraphs.map((item, index) => (
            <p key={index} className="text">
              {item}
            </p>
          ))}
        </div>
      </div>
    </li>
  )
}

export default News
