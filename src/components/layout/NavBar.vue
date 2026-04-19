<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="container navbar-container">
      <!-- Logo -->
      <router-link to="/" class="logo" @click="closeMobileMenu">
        <div class="logo-icon">🌸</div>
        <span class="logo-text">Mimosa</span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="nav-menu desktop-nav">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path" 
          class="nav-item"
          active-class="active"
        >
          {{ item.label }}
        </router-link>
      </nav>

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
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <nav class="mobile-nav">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="mobile-nav-item"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/features', label: '功能介绍' },
  { path: '/download', label: '下载中心' },
  { path: '/faq', label: '常见问题' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all var(--transition-normal);
  box-shadow: none;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: var(--shadow-md);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: bold;
  color: var(--primary-color);
  transition: var(--transition-fast);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 32px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.desktop-nav {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-item {
  color: var(--text-primary);
  font-weight: 500;
  padding: 8px 4px;
  position: relative;
  transition: var(--transition-fast);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width var(--transition-normal);
}

.nav-item:hover,
.nav-item.active {
  color: var(--primary-color);
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 100%;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  padding: 8px;
  cursor: pointer;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background-color: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-normal);
}

.menu-open .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
}

.menu-open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.menu-open .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}

.mobile-menu {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: var(--shadow-lg);
  padding: 20px;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.mobile-nav-item {
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  border-radius: var(--border-radius-sm);
  transition: var(--transition-fast);
}

.mobile-nav-item:hover,
.mobile-nav-item.router-link-active {
  background-color: var(--bg-gray);
  color: var(--primary-color);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 767px) {
  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .navbar-container {
    height: 60px;
  }

  .logo-text {
    font-size: 20px;
  }

  .logo-icon {
    font-size: 28px;
  }
}
</style>
