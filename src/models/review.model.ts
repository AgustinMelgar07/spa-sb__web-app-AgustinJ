export type StarRating = 1 | 2 | 3 | 4 | 5

export interface Data {
  id: number
  stars: StarRating
  comment: string
}

export interface CreateData {
  stars: StarRating
  comment: string
}

export interface CreateBody {
  star: StarRating
  comment: string
}
