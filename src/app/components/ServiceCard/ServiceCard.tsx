import './ServiceCard.css'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  serviceKey: string
  title: string
  defaultTreatmentImg: number
}

const ServiceCard = ({ serviceKey, title, defaultTreatmentImg }: Props) => (
  <Link className="cmp-service-card text" href={`/services#${serviceKey}`}>
    <Image
      src={`/services/${serviceKey}-${defaultTreatmentImg}.webp`}
      width={1280}
      height={720}
      alt={`Foto de uno de los tratamientos en ${title}. En el Spa Sentirse Bien`}
    />
    {title}
  </Link>
)

export default ServiceCard
