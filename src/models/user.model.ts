export enum Role {
  ADMIN = 'admin',
  STAFF = 'staff',
  CLIENT = 'client',
}

export interface Data {
  id: number
  name: string
  lastName: string
  phone: string | null
  email: string
  role: Role
  profilePhotoUrl: string
  createdAt: string
}

export interface CreateClientData {
  name: string
  lastName: string
  phone?: string
  email: string
  password: string
}

export interface CreateClientBody {
  name: string
  lastname: string
  phone?: string
  email: string
  password: string
}
