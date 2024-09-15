export interface Data {
  id: number
  name: string
  lastName: string
  phone: string | null
  email: string
  desc: string
  createdAt: string
}

export interface AnswerData {
  answer: string
}

export interface CreateData {
  name: string
  lastName: string
  phone?: string
  email: string
  desc: string
}

export interface CreateBody {
  name: string
  lastname: string
  phone?: string
  email: string
  description: string
}
