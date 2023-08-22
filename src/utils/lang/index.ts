import type { Lang } from '@/types'

export class LangUtils {
  private static LOCAL_STORAGE_LANG = 'Lang'

  static getLang() {
    return localStorage.getItem(this.LOCAL_STORAGE_LANG)
  }

  static setLang(lang: Lang) {
    localStorage.setItem(this.LOCAL_STORAGE_LANG, lang)
  }

  static clearLang() {
    localStorage.removeItem(this.LOCAL_STORAGE_LANG)
  }
  // 获取浏览器默认语言 'zh_CN' | 'en_US'
  static getDefaultBrowserLang(): Lang {
    const browserLang = navigator.language || ''
    if (browserLang.includes('zh')) {
      console.log(browserLang)
      return 'zh_CN'
    } else {
      return 'en_US'
    }
  }

  // 获取默认语言
  static getDefaultLang(): Lang {
    if (this.getLang() === 'zh_CN' || (!this.getLang && this.getDefaultBrowserLang() === 'zh_CN')) {
      return 'zh_CN'
    } else {
      return 'en_US'
    }
  }
}
