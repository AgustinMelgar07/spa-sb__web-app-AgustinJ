export enum State {
  PENDING = 'pending',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export interface Data {
  id: number
  idTreatment: number
  date: string
  hour: string
  comments: string | null
  state: State
  createdAt: string
}

export interface BusyResponse {
  occupiedHours: string[]
}

export interface BusyData {
  date: string
}

export interface BusyBody {
  date_turn: string
}

export interface CreateData {
  idTreatment: number
  date: string
  hour: string
  comments?: string
}

export interface CreateBody {
  id_treatment_turn: number
  date_turn: string
  hour_turn: string
  comment_turn?: string
}
