export type Gender = 0 | 1

export enum AuthType {
  Github = 0,
  Google = 1
}

export interface User {
  id?: number
  username?: string
  email?: string
  phoneNumber?: string
  name?: string
  firstName?: string
  lastName?: string
  nickName?: string
  avatarUrl?: string
  gender?: Gender
  genderLabel?: string
  country?: string
  province?: string
  city?: string
  address?: string
  biography?: string
  birthDate?: string
  verified?: boolean
  enabled?: boolean
  createdAt?: string
  roles?: string[]
  authTypes?: string[]
}
