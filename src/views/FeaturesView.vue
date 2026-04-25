<template>
  <div class="features-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>功能介绍</h1>
        <p>探索 Mimosa 的强大功能，发现社交的无限可能</p>
      </div>
    </section>

    <!-- Full Features Section -->
    <FeaturesSection />

    <!-- Detailed Feature Cards -->
    <section class="detailed-features section">
      <div class="container">
        <div class="feature-detail-grid">
          <div 
            v-for="(detail, index) in detailedFeatures" 
            :key="index"
            class="feature-detail-card"
          >
            <div class="detail-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="detail-content">
              <h3>{{ detail.title }}</h3>
              <p>{{ detail.description }}</p>
              <ul class="detail-list">
                <li v-for="(item, i) in detail.items" :key="i">{{ item }}</li>
              </ul>
            </div>
            <div class="detail-visual" :style="{ background: detail.bgGradient }">
              <el-icon :size="64"><component :is="detail.icon" /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="comparison-section section">
      <div class="container">
        <h2 class="comparison-title">与其他社交应用对比</h2>
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>功能特性</th>
                <th>Mimosa</th>
                <th>其他应用 A</th>
                <th>其他应用 B</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in comparisonData" :key="index">
                <td>{{ row.feature }}</td>
                <td class="highlight">{{ row.mimosa }}</td>
                <td>{{ row.otherA }}</td>
                <td>{{ row.otherB }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import FeaturesSection from '../components/sections/FeaturesSection.vue'
import { 
  ChatDotRound, 
  VideoCamera, 
  Picture,
  Lock,
  MagicStick,
  DataAnalysis
} from '@element-plus/icons-vue'

const detailedFeatures = [
  {
    icon: 'ChatDotRound',
    title: '智能即时通讯',
    description: '基于 AI 技术的智能聊天系统，让沟通更高效、更有趣',
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    items: [
      '实时消息同步，支持多设备同时在线',
      'AI 智能回复建议，快速回复常用消息',
      '消息翻译功能，打破语言障碍',
      '富媒体消息支持，发送图片、视频、文件',
      '消息搜索功能，快速找到历史记录'
    ]
  },
  {
    icon: 'VideoCamera',
    title: '高清视频通话',
    description: '支持多人视频会议、屏幕共享，打造沉浸式交流体验',
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    items: [
      '1080P 全高清画质，流畅不卡顿',
      '支持最多 50 人同时在线会议',
      '美颜滤镜和虚拟背景，提升形象',
      '屏幕共享和白板协作功能',
      '会议录制和回放，不错过重要内容'
    ]
  },
  {
    icon: 'Picture',
    title: '动态与社区',
    description: '分享生活瞬间，加入兴趣社区，结识志同道合的朋友',
    bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    items: [
      '发布图文、短视频动态',
      '24 小时故事功能，分享精彩时刻',
      '兴趣社区发现，找到同好圈子',
      '话题标签系统，参与热门讨论',
      '互动表情和评论，增强社交互动'
    ]
  },
  {
    icon: 'Lock',
    title: '隐私安全保护',
    description: '采用银行级加密技术，全方位守护你的隐私和数据安全',
    bgGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    items: [
      '端到端加密（E2EE），只有你能看',
      '阅后即焚模式，消息自动销毁',
      '双重认证（2FA）保护账户安全',
      '细粒度隐私设置，控制信息可见性',
      '数据本地化存储，符合国际标准'
    ]
  }
]

const comparisonData = [
  { feature: '端到端加密', mimosa: '✓', otherA: '✗', otherB: '部分' },
  { feature: 'AI 智能推荐', mimosa: '✓', otherA: '基础', otherB: '✗' },
  { feature: '多平台支持', mimosa: '全平台', otherA: '移动端', otherB: '部分' },
  { feature: '开源透明', mimosa: '✓', otherA: '✗', otherB: '✗' },
  { feature: '无广告干扰', mimosa: '✓', otherA: '有广告', otherB: '有广告' },
  { feature: '数据所有权', mimosa: '用户所有', otherA: '平台所有', otherB: '平台所有' }
]
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #fff5f7 0%, #f0f4ff 100%);
  padding: 120px 0 60px;
  text-align: center;
  transition: background var(--transition-theme);
}

:root.dark .page-header,
[data-theme="dark"] .page-header {
  background: linear-gradient(135deg, #0a0a0f 0%, #12121a 100%);
}

.page-header h1 {
  font-size: 48px;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.page-header p {
  font-size: 20px;
  color: var(--text-secondary);
}

.detailed-features {
  background-color: var(--bg-gray);
}

.feature-detail-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.feature-detail-card {
  display: grid;
  grid-template-columns: auto 1fr 200px;
  gap: 32px;
  background: var(--bg-card);
  padding: 40px;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  align-items: start;
}

.feature-detail-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
}

.detail-number {
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  color: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  flex-shrink: 0;
}

.detail-content h3 {
  font-size: 26px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.detail-content p {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.detail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-list li {
  padding-left: 24px;
  position: relative;
  color: var(--text-secondary);
  font-size: 15px;
}

.detail-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 700;
}

.detail-visual {
  width: 200px;
  height: 160px;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

/* Comparison Section */
.comparison-section {
  background-color: var(--bg-card);
}

.comparison-title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 48px;
}

.comparison-table-wrapper {
  overflow-x: auto;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-card);
}

.comparison-table th,
.comparison-table td {
  padding: 18px 24px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.comparison-table th {
  background: var(--bg-tertiary);
  font-weight: 600;
  color: var(--text-primary);
  font-size: 15px;
}

.comparison-table td {
  font-size: 14px;
  color: var(--text-secondary);
}

.comparison-table tr:hover {
  background-color: var(--bg-tertiary);
}

.comparison-table .highlight {
  color: var(--primary-color);
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 991px) {
  .page-header h1 {
    font-size: 36px;
  }

  .feature-detail-card {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .detail-number {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  .detail-visual {
    width: 100%;
    height: 140px;
  }
}

@media (max-width: 767px) {
  .page-header {
    padding: 100px 0 40px;
  }

  .page-header h1 {
    font-size: 28px;
  }

  .page-header p {
    font-size: 16px;
  }

  .detail-content h3 {
    font-size: 22px;
  }

  .comparison-title {
    font-size: 26px;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 12px 16px;
    font-size: 13px;
  }
}
</style>
