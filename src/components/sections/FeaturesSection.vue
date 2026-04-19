<template>
  <section id="features" class="features-section section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-badge">核心功能</span>
        <h2 class="section-title">为什么选择 Mimosa？</h2>
        <p class="section-description">
          我们精心打造每一项功能，只为给你带来最极致的社交体验
        </p>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="feature-icon" :style="{ background: feature.gradient }">
            <el-icon :size="32"><component :is="feature.icon" /></el-icon>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <ul class="feature-list">
            <li v-for="(item, i) in feature.items" :key="i">
              <el-icon><Check /></el-icon>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Feature Highlight -->
      <div class="feature-highlight">
        <div class="highlight-content">
          <span class="highlight-badge">AI 驱动</span>
          <h3 class="highlight-title">智能推荐系统</h3>
          <p class="highlight-text">
            基于先进的 AI 算法，Mimosa 能够精准理解你的兴趣和偏好，
            为你推荐志同道合的朋友、感兴趣的内容和活动。让社交变得更智能、更高效。
          </p>
          <ul class="highlight-features">
            <li>
              <el-icon><MagicStick /></el-icon>
              <span>个性化内容推荐</span>
            </li>
            <li>
              <el-icon><UserFilled /></el-icon>
              <span>智能好友匹配</span>
            </li>
            <li>
              <el-icon><TrendCharts /></el-icon>
              <span>兴趣社区发现</span>
            </li>
          </ul>
          <router-link to="/download" class="btn-highlight">
            体验 AI 功能
            <el-icon><ArrowRight /></el-icon>
          </router-link>
        </div>
        <div class="highlight-visual">
          <div class="ai-demo">
            <div class="demo-header">
              <div class="demo-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="demo-title">AI 推荐</span>
            </div>
            <div class="demo-content">
              <div class="recommendation-item">
                <div class="rec-avatar">🎨</div>
                <div class="rec-info">
                  <p class="rec-name">设计爱好者社区</p>
                  <p class="rec-match">匹配度 95%</p>
                </div>
                <el-button type="primary" size="small" round>加入</el-button>
              </div>
              <div class="recommendation-item">
                <div class="rec-avatar">📚</div>
                <div class="rec-info">
                  <p class="rec-name">读书分享会</p>
                  <p class="rec-match">匹配度 89%</p>
                </div>
                <el-button type="primary" size="small" round>加入</el-button>
              </div>
              <div class="recommendation-item">
                <div class="rec-avatar">🏃</div>
                <div class="rec-info">
                  <p class="rec-name">健身打卡群</p>
                  <p class="rec-match">匹配度 87%</p>
                </div>
                <el-button type="primary" size="small" round>加入</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  ChatDotRound, 
  VideoCamera, 
  Picture, 
  Lock,
  Check,
  MagicStick,
  UserFilled,
  TrendCharts,
  ArrowRight,
  Bell,
  Share,
  DataAnalysis
} from '@element-plus/icons-vue'

const features = [
  {
    icon: 'ChatDotRound',
    title: '即时通讯',
    description: '支持文字、语音、视频多种聊天方式，让沟通无障碍',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    items: ['端到端加密', '消息已读回执', '文件传输', '群聊功能']
  },
  {
    icon: 'VideoCamera',
    title: '视频通话',
    description: '高清流畅的视频通话体验，支持多人会议和屏幕共享',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    items: ['1080P 高清', '美颜滤镜', '虚拟背景', '多人会议']
  },
  {
    icon: 'Picture',
    title: '动态分享',
    description: '记录生活点滴，分享精彩瞬间，与朋友互动点赞评论',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    items: ['图片/视频', '故事功能', '位置标签', '互动表情']
  },
  {
    icon: 'Lock',
    title: '隐私保护',
    description: '采用业界领先的加密技术，全方位保护你的隐私安全',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    items: ['端到端加密', '阅后即焚', '隐私设置', '数据本地化']
  },
  {
    icon: 'Bell',
    title: '智能通知',
    description: 'AI 智能过滤通知，只推送你真正关心的内容',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    items: ['免打扰模式', '重要消息优先', '定时通知', '自定义规则']
  },
  {
    icon: 'DataAnalysis',
    title: '数据分析',
    description: '了解你的社交习惯，优化你的社交网络和互动质量',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    items: ['使用统计', '关系图谱', '活跃度分析', '健康提醒']
  }
]
</script>

<style scoped>
.features-section {
  background-color: var(--bg-gray);
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
  line-height: 1.3;
}

.section-description {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 80px;
}

.feature-card {
  background: white;
  padding: 36px 28px;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  animation: fadeInUp 0.6s ease-out both;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
  transition: transform var(--transition-normal);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.feature-description {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.feature-list .el-icon {
  color: var(--primary-color);
  font-size: 16px;
}

/* Feature Highlight */
.feature-highlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  background: white;
  padding: 60px;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
}

.highlight-badge {
  display: inline-block;
  padding: 8px 18px;
  background: var(--gradient-secondary);
  color: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}

.highlight-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.3;
}

.highlight-text {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 28px;
}

.highlight-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.highlight-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: var(--text-primary);
  font-weight: 500;
}

.highlight-features .el-icon {
  width: 32px;
  height: 32px;
  background: rgba(0, 176, 133, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.btn-highlight {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: var(--gradient-primary);
  color: white;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.btn-highlight:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 176, 133, 0.4);
}

/* AI Demo */
.highlight-visual {
  position: relative;
}

.ai-demo {
  background: #f8f9fa;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.demo-header {
  background: white;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

.demo-dots {
  display: flex;
  gap: 6px;
}

.demo-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.demo-dots span:nth-child(1) { background: #ff5f57; }
.demo-dots span:nth-child(2) { background: #ffbd2e; }
.demo-dots span:nth-child(3) { background: #28ca42; }

.demo-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
}

.demo-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.recommendation-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 16px;
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-fast);
}

.recommendation-item:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-sm);
}

.rec-avatar {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--bg-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.rec-info {
  flex: 1;
}

.rec-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.rec-match {
  font-size: 13px;
  color: var(--primary-color);
  font-weight: 500;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1199px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 36px;
  }

  .feature-highlight {
    gap: 40px;
    padding: 40px;
  }
}

@media (max-width: 767px) {
  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-card {
    padding: 28px 24px;
  }

  .feature-highlight {
    grid-template-columns: 1fr;
    padding: 32px 24px;
  }

  .highlight-visual {
    order: -1;
  }

  .highlight-title {
    font-size: 26px;
  }
}
</style>
