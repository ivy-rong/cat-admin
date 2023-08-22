import { createI18n } from 'vue-i18n'

import { LangUtils } from '@/utils'
import en_US from '@/locales/en_US.json'
import zh_CN from '@/locales/zh_CN.json'

const i18n = createI18n({
  legacy: false,
  locale: LangUtils.getDefaultLang(),
  fallbackLocale: 'zh_CN',
  messages: {
    en_US,
    zh_CN
  }
})

export default i18n
