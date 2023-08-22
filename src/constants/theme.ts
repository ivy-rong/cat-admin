import type { GlobalThemeOverrides } from 'naive-ui'

/**
 * 全局亮色主题
 */
export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#568CFF',
    primaryColorHover: '#568CFF',
    primaryColorPressed: '#568CFF',
    primaryColorSuppl: '#568CFF'
  },
  Dialog: {
    contentMargin: '20px 0 0 0',
    padding: '20px'
  },
  Card: {
    borderRadius: '8px'
  }
}

/**
 * 全局暗色主题
 */
export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#3C63FF',
    primaryColorHover: '#3C63FF',
    primaryColorPressed: '#3C63FF',
    primaryColorSuppl: '#3C63FF'
  },
  Dialog: {
    contentMargin: '20px 0 0 0',
    padding: '20px'
  },
  Card: {
    borderRadius: '8px'
  }
}
