import type { PageResponse, PageBaseModel, User } from '@/types'
import { GlobalEnvConfig } from '@/constants'

import Request from '../axios'

export class UserApi {
  private static USER_API_PREFIX = `${GlobalEnvConfig.BASE_API_PREFIX}/users`

  static getUsers(params: PageBaseModel) {
    return Request.get<PageResponse<User[]>>(this.USER_API_PREFIX, {
      ...params
    })
  }
}
