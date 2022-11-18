import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { localStorageEnum } from '@/constants/enums'
import i18n from '../i18n'

export type langType = 'zh_CN' | 'en_US'
// 默认语言
const getDefaultLang = (): langType => {
  return (localStorage.getItem(localStorageEnum.LANG) as langType) || 'zh_CN'
}

export interface IConfigStore {
  lang: langType
}

// https://pinia.vuejs.org/zh/core-concepts/index.html#option-stores
// 外部可直接修改 store.state.lang = 'zh_CN'
export const useConfigStore = defineStore('config', () => {
  const state: IConfigStore = reactive({
    lang: getDefaultLang(),
  })

  const setLang = (lang: langType) => {
    state.lang = lang
    i18n.global.locale = lang
    localStorage.setItem(localStorageEnum.LANG, lang)
  }

  return { state, setLang }
})
