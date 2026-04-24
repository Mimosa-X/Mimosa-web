<template>
  <header class="floating-navbar-wrapper" :class="{ 'hidden': isHidden }">
    <!-- 玻璃效果导航栏容器 -->
    <GlassSurface
      :width="navWidth"
      :height="64"
      :border-radius="32"
      :border-width="0.05"
      :brightness="85"
      :opacity="0.85"
      :blur="8"
      :displace="0.3"
      :background-opacity="0.15"
      :saturation="1.2"
      :distortion-scale="-120"
      class="floating-nav-glass"
    >
      <nav class="floating-nav">
        <!-- Logo -->
        <router-link to="/" class="nav-logo" @click="closeMobileMenu">
          <img src="/favicon.svg" alt="Mimosa Logo" class="logo-icon-svg" />
          <span class="logo-text">Mimosa</span>
        </router-link>

        <!-- Desktop Navigation Links -->
        <div class="nav-links desktop-links">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            active-class="active"
          >
            {{ item.label }}
          </router-link>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="mobile-toggle"
          @click="toggleMobileMenu"
          aria-label="切换菜单"
          :aria-expanded="isMobileMenuOpen"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </nav>
    </GlassSurface>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="mobile-overlay"
        @click="closeMobileMenu"
      ></div>
    </transition>

    <!-- Mobile Menu Panel -->
    <transition name="slide-up">
      <div v-if="isMobileMenuOpen" class="mobile-menu-panel">
        <GlassSurface
          width="100%"
          :height="0"
          :border-radius="24"
          :border-width="0.03"
          :brightness="90"
          :opacity="0.9"
          :blur="12"
          :background-opacity="0.2"
          class="mobile-menu-glass"
        >
          <div class="mobile-menu-content">
            <div class="mobile-menu-header">
              <span class="menu-title">菜单</span>
              <button class="close-btn" @click="closeMobileMenu">
                <el-icon><Close /></el-icon>
              </button>
            </div>

            <nav class="mobile-nav-links">
              <router-link
                v-for="item in navItems"
                :key="item.path"
                :to="item.path"
                class="mobile-nav-link"
                :class="{ active: $route.path === item.path }"
                @click="closeMobileMenu"
              >
                <span class="link-text">{{ item.label }}</span>
                <el-icon><ArrowRight /></el-icon>
              </router-link>
            </nav>
          </div>
        </GlassSurface>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Close, ArrowRight } from '@element-plus/icons-vue'
import GlassSurface from '../effects/GlassSurface.vue'

const route = useRoute()

// 响应式状态
const isScrolled = ref(false)
const isHidden = ref(false)
const isMobileMenuOpen = ref(false)
const lastScrollY = ref(0)

// 导航项
const navItems = [
  { path: '/', label: '首页' },
  { path: '/features', label: '功能介绍' },
  { path: '/download', label: '下载中心' },
  { path: '/faq', label: '常见问题' },
]

// 计算属性
const navWidth = computed(() => {
  // 根据屏幕宽度动态调整导航栏宽度
  if (typeof window === 'undefined') return '800px'
  const width = window.innerWidth
  if (width < 640) return 'calc(100% - 32px)'
  if (width < 1024) return '600px'
  return '720px'
})

// 滚动处理
const handleScroll = () => {
  const currentScrollY = window.scrollY

  // 检测是否滚动超过阈值（用于样式变化）
  isScrolled.value = currentScrollY > 50

  lastScrollY.value = currentScrollY
}

// 移动端菜单控制
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // 禁止背景滚动
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* 浮动导航栏包装器 */
.floating-navbar-wrapper {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.floating-navbar-wrapper.hidden {
  transform: translateX(-50%) translateY(-100px);
  opacity: 0;
}

/* 玻璃效果导航栏 */
.floating-nav-glass {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
}

/* 导航栏内部布局 */
.floating-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 24px;
}

/* Logo 样式 */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-logo:hover {
  transform: scale(1.05);
}

.logo-icon-svg {
  width: 32px;
  height: 32px;
  animation: float 3s ease-in-out infinite;
}

.logo-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

/* 桌面端导航链接 */
.desktop-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  position: relative;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
  background: rgba(0, 176, 133, 0.08);
}

.nav-link.active {
  color: var(--primary-color);
  background: rgba(0, 176, 133, 0.12);
  font-weight: 600;
}

/* 汉堡菜单按钮 */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.mobile-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* 遮罩层 */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: -1;
}

/* 移动端菜单面板 */
.mobile-menu-panel {
  position: fixed;
  bottom: -355px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 400px;
  z-index: 1001;
}

.mobile-menu-glass {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
  min-height: auto !important;
  height: auto !important;
}

.mobile-menu-content {
  width: 100%;
  padding: 20px;
  min-height: 200px;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.menu-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.close-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.1);
  color: var(--text-primary);
}

/* 移动端导航链接 */
.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover {
  background: rgba(0, 176, 133, 0.08);
  color: var(--primary-color);
}

.mobile-nav-link.active {
  background: rgba(0, 176, 133, 0.12);
  color: var(--primary-color);
  font-weight: 600;
}

.mobile-nav-link .el-icon {
  font-size: 16px;
  color: var(--text-secondary);
  transition: transform 0.2s ease;
}

.mobile-nav-link:hover .el-icon {
  transform: translateX(4px);
  color: var(--primary-color);
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

/* 响应式设计 */
@media (max-width: 767px) {
  .floating-navbar-wrapper {
    top: 12px;
  }

  .floating-nav {
    padding: 0 16px;
  }

  .nav-logo {
    font-size: 18px;
  }

  .logo-icon-svg {
    width: 28px;
    height: 28px;
  }

  .desktop-links {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .floating-nav {
    padding: 0 20px;
  }

  .nav-link {
    padding: 8px 12px;
    font-size: 13px;
  }
}
</style>
