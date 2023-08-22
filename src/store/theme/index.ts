import { defineStore } from 'pinia'

import { darkTheme, lightTheme } from 'naive-ui'
4

import type { Theme, Lang } from '@/types'

import { ThemeUtils, LangUtils } from '@/utils'
import { computed, ref } from 'vue'

import { darkThemeOverrides, lightThemeOverrides } from '@/constants'

export const useThemeStore = defineStore('Theme', () => {
  /**
   * 主题模式
   * @description
   *  light | dark
   */
  const themeMode = ref<Theme>(ThemeUtils.getDefaultThemeMode())

  /**
   * Naive UI 组件语言
   */
  const local = ref<Lang>(LangUtils.getDefaultLang())

  /**
   * Naive UI 组件日期语言
   */
  const dateLocale = ref<string>(LangUtils.getDefaultLang())
  /**
   * Naive UI 组件主题
   */
  const theme = computed(() => (themeMode.value === 'light' ? lightTheme : darkTheme))

  /**
   * Naive UI 组件主题覆盖
   */
  const themOverrides = computed(() => (themeMode.value === 'light' ? lightThemeOverrides : darkThemeOverrides))

  /**
   * 修改主题模式
   * @description
   *
   */

  const changeThemeMode = (theme: Theme) => {
    themeMode.value = theme
    ThemeUtils.setTheme(theme)
  }

  /**
   * 修改语言
   */
  const changeLocale = (lang: Lang) => {
    switch (lang) {
      case 'zh_CN':
        local.value = 'zh_CN'
        dateLocale.value = 'dateZhCN'
        break
      case 'en_US':
        local.value = 'en_US'
        dateLocale.value = 'dateEnUS'
        break
      default:
        break
    }
  }

  return {
    themeMode,
    dateLocale,
    local,
    theme,
    themOverrides,
    changeLocale,
    changeThemeMode
  }
})
