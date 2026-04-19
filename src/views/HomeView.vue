<template>
  <div class="home-view">
    <HeroSection />
    <FeaturesSection />
    <DownloadSection />
    <FAQSection />

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备好开始你的社交之旅了吗？</h2>
          <p>加入全球 1000 万+ 用户，体验全新的社交方式</p>
          <div class="cta-buttons">
            <router-link to="/download" class="btn-cta-primary">
              免费下载
              <el-icon><Download /></el-icon>
            </router-link>
            <a href="#features" class="btn-cta-secondary">了解更多</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue'
import FeaturesSection from '../components/sections/FeaturesSection.vue'
import DownloadSection from '../components/sections/DownloadSection.vue'
import FAQSection from '../components/sections/FAQSection.vue'
import { Download } from '@element-plus/icons-vue'
</script>

<style scoped>
.cta-section {
  background: var(--gradient-primary);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.cta-section::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: 42px;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 36px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-cta-primary,
.btn-cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 36px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  transition: all var(--transition-normal);
  cursor: pointer;
}

.btn-cta-primary {
  background: white;
  color: var(--primary-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.btn-cta-primary:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.btn-cta-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-cta-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-3px);
}

@media (max-width: 767px) {
  .cta-section {
    padding: 60px 0;
  }

  .cta-content h2 {
    font-size: 28px;
  }

  .cta-content p {
    font-size: 16px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-cta-primary,
  .btn-cta-secondary {
    justify-content: center;
    padding: 14px 28px;
    font-size: 16px;
  }
}
</style>
