import { createI18n } from 'vue-i18n'
import { reactive } from 'vue'
import { localStorageEnum } from '@/constants/enums'

import enUS from '@arco-design/web-vue/es/locale/lang/en-us'
import zhCn from '@arco-design/web-vue/es/locale/lang/zh-cn'

import en from './en';
import zh from './zh'

const messages = {
  en_US: {
    ...en,
    ...enUS,
  },
  zh_CN: {
    ...zh,
    ...zhCn,
  },
}

const getLanguage = () => localStorage.getItem(localStorageEnum.LANG) || 'zh_CN'

const i18n = reactive(
  createI18n({
    legacy: false,
    locale: getLanguage(),
    messages,
    warnHtmlInMessage: "off",
  }),
)

export const arcoLang = getLanguage() === 'zh_CN' ? messages.zh_CN : messages.en_US

export default i18n
