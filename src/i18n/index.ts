import { createI18n } from 'vue-i18n'
import pagesZhcn from '@/i18n/pages/zh-cn'
import pagesEn from '@/i18n/pages/en'
import pagesZhtw from '@/i18n/pages/zh-tw'

// 定义语言国际化内容
const messages = {
  zhCn: {
    message: {
      ...pagesZhcn
    }
  },
  en: {
    message: {
      ...pagesEn
    }
  },
  zhTw: {
    message: {
      ...pagesZhtw
    }
  }
}

// 导出语言国际化
export const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages,
  globalInjection: true
})
