import type { Theme } from '@/types'

export class ThemeUtils {
  private static LOCAL_STORAGE_THEME = 'theme'

  static getTheme() {
    return localStorage.getItem(this.LOCAL_STORAGE_THEME)
  }

  static setTheme(theme: Theme) {
    localStorage.setItem(this.LOCAL_STORAGE_THEME, theme)
  }

  static clearTheme() {
    localStorage.removeItem(this.LOCAL_STORAGE_THEME)
  }

  static getDefaultThemeMode(): Theme {
    if (this.getTheme() === 'dark' || (!this.getTheme() && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return 'dark'
    } else {
      return 'light'
    }
  }
}
