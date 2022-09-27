import { useContext } from 'react'
import { I18nContext } from '../../../lib/i18n'
import { i18nWrapper } from './interface'

export const i18nDefault = {} as i18nWrapper

const useI18n = () => useContext<i18nWrapper>(I18nContext)

export default useI18n
