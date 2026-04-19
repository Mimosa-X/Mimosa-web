<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-logo">
            <span class="logo-icon">🌸</span>
            <span class="logo-text">Mimosa</span>
          </div>
          <p class="brand-description">
            新一代社交平台，连接你我，分享生活的每一个精彩瞬间
          </p>
          <div class="social-links">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <el-icon :size="20"><component :is="social.icon" /></el-icon>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4 class="links-title">快速链接</h4>
          <ul class="links-list">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link :to="link.path">{{ link.label }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div class="footer-support">
          <h4 class="links-title">支持</h4>
          <ul class="links-list">
            <li v-for="item in supportLinks" :key="item.url">
              <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-contact">
          <h4 class="links-title">联系我们</h4>
          <div class="contact-info">
            <p><el-icon><Message /></el-icon> support@mimosa.com</p>
            <p><el-icon><Location /></el-icon> 中国·深圳</p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} Mimosa. All rights reserved.
        </p>
        <div class="legal-links">
          <a href="/privacy" target="_blank">隐私政策</a>
          <span class="separator">|</span>
          <a href="/terms" target="_blank">服务条款</a>
          <span class="separator">|</span>
          <a href="/cookies" target="_blank">Cookie政策</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Message, Location, ChatDotRound, Promotion, Phone } from '@element-plus/icons-vue'

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { name: '微信', url: '#', icon: 'ChatDotRound' },
  { name: '微博', url: '#', icon: 'Promotion' },
  { name: 'Twitter', url: '#', icon: 'ChatDotRound' },
  { name: 'GitHub', url: '#', icon: 'Promotion' }
]

const quickLinks = [
  { path: '/', label: '首页' },
  { path: '/features', label: '功能介绍' },
  { path: '/download', label: '下载中心' },
  { path: '/faq', label: '常见问题' }
]

const supportLinks = [
  { url: '/help', label: '帮助中心' },
  { url: '/community', label: '社区论坛' },
  { url: '/feedback', label: '意见反馈' },
  { url: '/api', label: '开发者文档' }
]
</script>

<style scoped>
.footer {
  background-color: #1a1a2e;
  color: #ffffff;
  padding: 60px 0 30px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 16px;
}

.logo-icon {
  font-size: 32px;
}

.brand-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-fast);
}

.social-link:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px);
}

.links-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
}

.links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.links-list a {
  color: rgba(255, 255, 255, 0.7);
  transition: var(--transition-fast);
  font-size: 14px;
}

.links-list a:hover {
  color: var(--primary-color);
  padding-left: 5px;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-bottom: 12px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

.legal-links {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 14px;
}

.legal-links a {
  color: rgba(255, 255, 255, 0.6);
  transition: var(--transition-fast);
}

.legal-links a:hover {
  color: var(--primary-color);
}

.separator {
  color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 991px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 767px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .legal-links {
    justify-content: center;
  }
}
</style>
