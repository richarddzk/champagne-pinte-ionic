import { TData } from '@/Main/auth-provider/interfaces'
import { SimpleDialogProps } from '@/Main/Menu/CartMenu/CartMenu'
import { user_data as User } from '@/Modules/account/__generated__/user'
import { resendEmail, resendEmailVariables } from '@/Modules/confirmEmail/__generated__/resendEmail'
import { ApolloCache, DefaultContext, MutationFunctionOptions } from '@apollo/client'

export interface InfosProps {
  props?: { user: User; auth: TData }
}

export interface InfosFormDialogProps extends SimpleDialogProps {
  user: User
  mdp: boolean
  maj: (updatedUser: User) => Promise<boolean>
  SendMailChangePassword: (email: string) => void
  resendEmail: (
    options?:
    | MutationFunctionOptions<resendEmail, resendEmailVariables, DefaultContext, ApolloCache<any>>
    | undefined
  ) => any
}
