<template>
  <section id="download" class="download-section section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-badge">立即获取</span>
        <h2 class="section-title">全平台支持</h2>
        <p class="section-description">
          无论你使用什么设备，Mimosa 都能为你提供一致且优质的体验
        </p>
      </div>

      <!-- Download Platforms Grid -->
      <div class="platforms-grid">
        <!-- Platform Cards with Border Glow -->
        <BorderGlow
          v-for="(platform, index) in platforms"
          :key="index"
          :className="'platform-card-wrapper'"
          :borderRadius="20"
          :backgroundColor="'white'"
          :glowRadius="30"
          :glowIntensity="1.2"
          :colors="[platform.borderColor, platform.glowColor || platform.borderColor, '#ffffff']"
          :glowColor="platform.glowColor || '160 100 60'"
          :edgeSensitivity="25"
          :coneSpread="20"
        >
          <div class="platform-card" :class="{ 'featured': platform.featured }">
            <div class="platform-icon" :style="{ background: platform.gradient }">
              <el-icon :size="36"><component :is="platform.icon" /></el-icon>
            </div>
            <h3 class="platform-name">{{ platform.name }}</h3>
            <p class="platform-version">{{ platform.version }}</p>
            <p class="platform-size">{{ platform.size }}</p>
            
            <div class="download-buttons">
              <el-button 
                v-for="(btn, btnIndex) in platform.buttons" 
                :key="btnIndex"
                :type="btn.type"
                :size="(btn as any).size || 'default'"
                round
                @click="handleDownload(btn.url, platform.name)"
              >
                <el-icon><Download /></el-icon>
                {{ btn.label }}
              </el-button>
            </div>

            <ul class="platform-features">
              <li v-for="(feature, fIndex) in platform.features" :key="fIndex">
                <el-icon><Check /></el-icon>
                {{ feature }}
              </li>
            </ul>

            <div class="platform-stats" v-if="platform.stats">
              <div class="stat">
                <span class="stat-value">{{ platform.stats.downloads }}</span>
                <span class="stat-label">下载量</span>
              </div>
              <div class="stat">
                <span class="stat-value">{{ platform.stats.rating }}</span>
                <span class="stat-label">评分</span>
              </div>
            </div>
          </div>
        </BorderGlow>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  Iphone,
  Monitor,
  Download,
  Check,
  Link,
  Lock
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import BorderGlow from '../effects/BorderGlow.vue'

const platforms = [
  {
    name: 'Android 安卓',
    icon: 'Iphone',
    version: 'v2.0.1',
    size: '85 MB',
    gradient: 'linear-gradient(135deg, #3DDC84 0%, #00A86B 100%)',
    borderColor: '#3DDC84',
    glowColor: '140 80 50',
    featured: true,
    buttons: [
      { label: '下载 APK', type: 'success', url: '#' }
    ],
    features: ['APK 直装', '自动更新', '深色模式', '通知管理'],
    stats: {
      downloads: '500万+',
      rating: '4.8'
    }
  },
  {
    name: 'iOS 苹果',
    icon: 'Iphone',
    version: 'v2.0.1',
    size: '92 MB',
    gradient: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
    borderColor: '#007AFF',
    glowColor: '210 100 60',
    buttons: [
      { label: 'App Store', type: 'primary', url: '#' }
    ],
    features: ['TestFlight 测试', 'Face ID 支持', 'Widget 小组件', 'iCloud 同步'],
    stats: {
      downloads: '300万+',
      rating: '4.9'
    }
  },
  {
    name: 'Windows',
    icon: 'Monitor',
    version: 'v2.0.1',
    size: '120 MB',
    gradient: 'linear-gradient(135deg, #0078D4 0%, #00BCF2 100%)',
    borderColor: '#0078D4',
    glowColor: '200 100 55',
    buttons: [
      { label: '下载 .exe', type: 'primary', url: '#' }
    ],
    features: ['原生应用', '系统通知', '快捷键支持', '多窗口'],
    stats: {
      downloads: '150万+',
      rating: '4.7'
    }
  },
  {
    name: 'macOS',
    icon: 'Monitor',
    version: 'v2.0.1',
    size: '135 MB',
    gradient: 'linear-gradient(135deg, #555555 0%, #333333 100%)',
    borderColor: '#999999',
    glowColor: '0 0 70',
    buttons: [
      { label: '下载 .dmg', type: 'primary', url: '#' }
    ],
    features: ['原生体验', 'Touch Bar', 'Spotlight 集成', '分屏支持'],
    stats: {
      downloads: '80万+',
      rating: '4.8'
    }
  },
  {
    name: 'Linux',
    icon: 'Monitor',
    version: 'v2.0.1',
    size: '110 MB',
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    borderColor: '#FF6B35',
    glowColor: '25 100 60',
    buttons: [
      { label: '.deb 包', type: 'warning', url: '#' }
    ],
    features: ['开源社区', 'Snap 支持', 'Flatpak 打包', '终端集成'],
    stats: {
      downloads: '30万+',
      rating: '4.6'
    }
  }
]

const handleDownload = (url: string, platformName: string) => {
  ElMessage.success(`正在准备 ${platformName} 下载...`)
  // 实际项目中这里会触发真实的下载逻辑
}
</script>

<style scoped>
.download-section {
  background: linear-gradient(180deg, var(--bg-gray) 0%, white 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-badge {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, rgba(0, 176, 133, 0.1), rgba(0, 212, 160, 0.1));
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.section-description {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  margin-bottom: 80px;
}

.platform-card-wrapper {
  width: 100%;
}

.platform-card {
  background: white;
  padding: 32px 28px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  width: 100%;
  /* 移除原有阴影效果 */
  box-shadow: none;
}

.platform-card.featured {
  border: 2px solid var(--primary-color);
}

.platform-card.featured::after {
  content: '热门';
  position: absolute;
  top: 16px;
  right: -30px;
  background: var(--gradient-primary);
  color: white;
  padding: 4px 40px;
  font-size: 12px;
  font-weight: 600;
  transform: rotate(45deg);
}

.platform-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
}

.web-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

.platform-name {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.platform-version {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.platform-size {
  font-size: 13px;
  color: var(--text-secondary);
  opacity: 0.7;
  margin-bottom: 20px;
}

.download-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.download-buttons .el-button {
  justify-content: center;
  font-weight: 600;
}

.platform-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.platform-features li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.platform-features .el-icon {
  color: #52c41a;
  font-size: 16px;
}

.platform-stats {
  display: flex;
  gap: 24px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 2px;
}

/* Responsive Design */
@media (max-width: 1199px) {
  .section-title {
    font-size: 36px;
  }
}

@media (max-width: 991px) {
  .platforms-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
  }

  .platforms-grid {
    grid-template-columns: 1fr;
  }

  .download-buttons .el-button {
    width: 100%;
  }
}
</style>
