export enum PersonalRole {
  EMPLOYEE = 'EMPLOYEE',
  ADMIN = 'ADMIN',
}

export interface MinData {
  id: number
  name: string
}

export interface RemainingData {
  lastName: string
  email: string
  phone?: string | null
  role: PersonalRole
}

export interface FullData extends MinData, RemainingData {}

export interface CreateData {
  name: string
  lastName: string
  email: string
  phone: string
  role: PersonalRole
  password: string
}

export interface CreateBody {
  name: string
  lastName: string
  email: string
  phone: string
  role: PersonalRole
  password: string
}
