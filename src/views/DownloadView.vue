<template>
  <div class="download-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>下载中心</h1>
        <p>选择适合你的平台，立即开始使用 Mimosa</p>
      </div>
    </section>

    <!-- Download Section -->
    <DownloadSection />

    <!-- Version History -->
    <section class="version-history section">
      <div class="container">
        <h2 class="history-title">更新日志</h2>
        
        <div class="timeline">
          <div 
            v-for="(version, index) in versions" 
            :key="index"
            class="timeline-item"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="version-header">
                <span class="version-number">{{ version.version }}</span>
                <span class="version-date">{{ version.date }}</span>
                <el-tag :type="version.type" size="small">{{ version.tag }}</el-tag>
              </div>
              <h3>{{ version.title }}</h3>
              <ul class="changelog-list">
                <li v-for="(change, i) in version.changes" :key="i">
                  <span :class="['change-type', change.type]">{{ change.typeLabel }}</span>
                  {{ change.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="load-more">
          <el-button round>查看更多历史版本</el-button>
        </div>
      </div>
    </section>

    <!-- Installation Guide -->
    <section class="install-guide section">
      <div class="container">
        <h2 class="guide-title">安装指南</h2>
        
        <div class="guide-grid">
          <div 
            v-for="(guide, index) in guides" 
            :key="index"
            class="guide-card"
          >
            <div class="guide-icon" :style="{ background: guide.gradient }">
              <el-icon :size="32"><component :is="guide.icon" /></el-icon>
            </div>
            <h3>{{ guide.platform }}</h3>
            <ol class="guide-steps">
              <li v-for="(step, i) in guide.steps" :key="i">{{ step }}</li>
            </ol>
            <a href="#" class="guide-link">查看详细教程 →</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import DownloadSection from '../components/sections/DownloadSection.vue'
import { Iphone, Monitor, Promotion } from '@element-plus/icons-vue'

const versions = [
  {
    version: 'v2.0.1',
    date: '2026-04-15',
    type: 'success',
    tag: '最新',
    title: '重大更新 - AI 功能全面升级',
    changes: [
      { type: 'new', typeLabel: '新增', text: 'AI 智能回复建议功能，支持多种场景' },
      { type: 'new', typeLabel: '新增', text: '视频通话支持虚拟背景和美颜滤镜' },
      { type: 'improve', typeLabel: '优化', text: '消息加载速度提升 40%' },
      { type: 'fix', typeLabel: '修复', text: '修复部分设备上的通知延迟问题' },
      { type: 'improve', typeLabel: '优化', text: '优化内存占用，降低电量消耗' }
    ]
  },
  {
    version: 'v2.0.0',
    date: '2026-03-20',
    type: 'primary',
    tag: '大版本',
    title: 'Mimosa 2.0 全新发布',
    changes: [
      { type: 'new', typeLabel: '新增', text: '全新的 UI 设计，更现代的视觉体验' },
      { type: 'new', typeLabel: '新增', text: '端到端加密（E2EE）全面启用' },
      { type: 'new', typeLabel: '新增', text: '支持 Linux 桌面客户端' },
      { type: 'improve', typeLabel: '优化', text: '重构底层架构，性能提升 60%' },
      { type: 'new', typeLabel: '新增', text: 'Web 网页版正式上线' }
    ]
  },
  {
    version: 'v1.9.5',
    date: '2026-02-10',
    type: '',
    tag: '稳定版',
    title: '稳定性和兼容性改进',
    changes: [
      { type: 'fix', typeLabel: '修复', text: '修复 iOS 18 兼容性问题' },
      { type: 'fix', typeLabel: '修复', text: '修复 Android 14 后台运行崩溃问题' },
      { type: 'improve', typeLabel: '优化', text: '改进图片压缩算法，节省存储空间' },
      { type: 'improve', typeLabel: '优化', text: '优化深色模式显示效果' }
    ]
  }
]

const guides = [
  {
    icon: 'Iphone',
    platform: 'iOS 安装指南',
    gradient: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
    steps: [
      '打开 App Store 应用',
      '搜索 "Mimosa"',
      '点击"获取"按钮',
      '使用 Face ID 或密码验证',
      '等待下载完成并打开应用'
    ]
  },
  {
    icon: 'Iphone',
    platform: 'Android 安装指南',
    gradient: 'linear-gradient(135deg, #3DDC84 0%, #00A86B 100%)',
    steps: [
      '下载 APK 安装包',
      '在设置中允许安装未知来源',
      '打开下载的 APK 文件',
      '按照提示完成安装',
      '打开应用并登录账号'
    ]
  },
  {
    icon: 'Monitor',
    platform: 'Windows/macOS/Linux',
    gradient: 'linear-gradient(135deg, #0078D4 0%, #00BCF2 100%)',
    steps: [
      '下载对应平台的安装包',
      '双击运行安装程序',
      '选择安装路径（可选）',
      '完成安装向导',
      '启动 Mimosa 并开始使用'
    ]
  }
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

/* Version History */
.version-history {
  background-color: var(--bg-gray);
}

.history-title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 48px;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-marker {
  position: absolute;
  left: -28px;
  top: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient-primary);
  border: 3px solid var(--bg-card);
  box-shadow: var(--shadow-sm);
}

.timeline-content {
  background: var(--bg-card);
  padding: 28px 32px;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
}

.version-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.version-number {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
}

.version-date {
  font-size: 14px;
  color: var(--text-secondary);
}

.timeline-content h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.changelog-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.changelog-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.change-type {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
}

.change-type.new {
  background: rgba(103, 194, 58, 0.1);
  color: #52c41a;
}

.change-type.improve {
  background: rgba(24, 144, 255, 0.1);
  color: #1890ff;
}

.change-type.fix {
  background: rgba(250, 173, 20, 0.1);
  color: #faad14;
}

.load-more {
  text-align: center;
  margin-top: 40px;
}

/* Installation Guide */
.install-guide {
  background-color: var(--bg-card);
}

.guide-title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 48px;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.guide-card {
  background: var(--bg-gray);
  padding: 36px 28px;
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-normal);
}

.guide-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.guide-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
}

.guide-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.guide-steps {
  list-style: none;
  counter-reset: step-counter;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.guide-steps li {
  padding-left: 32px;
  position: relative;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.guide-steps li::before {
  content: counter(step-counter);
  counter-increment: step-counter;
  position: absolute;
  left: 0;
  top: 0;
  width: 22px;
  height: 22px;
  background: var(--gradient-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.guide-link {
  color: var(--primary-color);
  font-weight: 500;
  font-size: 14px;
  transition: all var(--transition-fast);
}

.guide-link:hover {
  gap: 4px;
}

/* Responsive Design */
@media (max-width: 991px) {
  .page-header h1 {
    font-size: 36px;
  }

  .guide-grid {
    grid-template-columns: 1fr;
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

  .history-title,
  .guide-title {
    font-size: 26px;
  }

  .timeline {
    padding-left: 24px;
  }

  .timeline-content {
    padding: 20px 24px;
  }

  .version-header {
    flex-wrap: wrap;
  }
}
</style>
