import { Observable } from 'rxjs'

export const DefaultFacebookContext = {} as FacebookContextType

export interface FacebookContextType {
  login: () => Promise<unknown>
  logout: () => void
  account: Observable<null>
  readonly accountValue: null

}
export interface LoginProps {
  register: any
}
