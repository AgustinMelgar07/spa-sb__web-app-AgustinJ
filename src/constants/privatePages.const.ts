import { UserModel } from '@/models'
import jsonData from '@/data.json'

interface Page {
  page: string
  title: string
}

const { reserve, myAppts, inquiries } = jsonData.pages.dynamic

const PRIVATE_PAGES: Record<UserModel.Role, Page[]> = {
  admin: [inquiries],
  staff: [],
  client: [reserve, myAppts],
}

export const getPrivatePages = (role: UserModel.Role) => PRIVATE_PAGES[role]

export const getAllowedRoles = (page: Page) =>
  Object.keys(PRIVATE_PAGES).filter(role =>
    PRIVATE_PAGES[role as UserModel.Role].some(
      privatePage => privatePage.page === page.page
    )
  ) as UserModel.Role[]
