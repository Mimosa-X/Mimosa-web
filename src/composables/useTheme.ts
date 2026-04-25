import { ref, watch, onMounted, onUnmounted } from 'vue'

/**
 * 主题管理 Composable
 * 提供深色/浅色主题切换功能，支持用户偏好记忆
 */

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'mimosa-theme-preference'

const isDark = ref(false)
const theme = ref<ThemeMode>('light')

/** 初始化主题 */
const initTheme = () => {
  if (typeof window === 'undefined') return

  // 1. 优先从 localStorage 读取用户偏好
  const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    setTheme(savedTheme)
    return
  }

  // 2. 其次检测系统偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  setTheme(prefersDark ? 'dark' : 'light')
}

/** 设置主题 */
const setTheme = (newTheme: ThemeMode) => {
  theme.value = newTheme
  isDark.value = newTheme === 'dark'

  // 更新 HTML 根元素的 class
  if (typeof document !== 'undefined') {
    const html = document.documentElement
    if (newTheme === 'dark') {
      html.classList.add('dark')
      html.setAttribute('data-theme', 'dark')
    } else {
      html.classList.remove('dark')
      html.setAttribute('data-theme', 'light')
    }
  }

  // 保存到 localStorage
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, newTheme)
  }
}

/** 切换主题 */
const toggleTheme = () => {
  setTheme(isDark.value ? 'light' : 'dark')
}

/** 监听系统主题变化 */
let mediaQuery: MediaQueryList | null = null

const handleSystemThemeChange = (e: MediaQueryListEvent) => {
  // 只有在用户没有手动设置过主题时才跟随系统
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  if (!savedTheme) {
    setTheme(e.matches ? 'dark' : 'light')
  }
}

/** 初始化系统主题监听 */
const initSystemThemeListener = () => {
  if (typeof window === 'undefined') return

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', handleSystemThemeChange)
}

/** 清理系统主题监听 */
const cleanupSystemThemeListener = () => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleSystemThemeChange)
    mediaQuery = null
  }
}

export function useTheme() {
  onMounted(() => {
    initTheme()
    initSystemThemeListener()
  })

  onUnmounted(() => {
    cleanupSystemThemeListener()
  })

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme
  }
}
