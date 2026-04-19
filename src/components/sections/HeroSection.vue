<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="gradient-overlay"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>

    <div class="container hero-container">
      <div class="hero-content">
        <div class="badge">
          <el-icon><Star /></el-icon>
          <span>全新升级 v2.0</span>
        </div>

        <h1 class="hero-title">
          <span class="title-line">连接世界</span>
          <span class="title-highlight">分享精彩生活</span>
        </h1>

        <p class="hero-description">
          Mimosa 是新一代智能社交平台，融合 AI 技术，让每一次交流都更有意义。
          无论是与好友畅聊、发现志同道合的伙伴，还是记录生活的美好瞬间，
          Mimosa 都能为你提供极致体验。
        </p>

        <div class="hero-actions">
          <router-link to="/download" class="btn-primary">
            <el-icon><Download /></el-icon>
            立即下载
          </router-link>
          <a href="#features" class="btn-secondary">
            <el-icon><VideoPlay /></el-icon>
            了解更多
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">1000万+</span>
            <span class="stat-label">活跃用户</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">4.9</span>
            <span class="stat-label">应用评分</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">国家地区</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="phone-mockup">
          <div class="phone-screen">
            <div class="screen-content">
              <div class="chat-preview">
                <div class="message message-received">
                  <div class="message-avatar">👤</div>
                  <div class="message-bubble">嗨！欢迎使用 Mimosa 🎉</div>
                </div>
                <div class="message message-sent">
                  <div class="message-bubble">太棒了！看起来很酷 😊</div>
                </div>
                <div class="message message-received">
                  <div class="message-avatar">👤</div>
                  <div class="message-bubble">快来探索更多功能吧！</div>
                </div>
              </div>
            </div>
          </div>
          <div class="phone-notch"></div>
        </div>

        <div class="floating-card card-1">
          <el-icon><User /></el-icon>
          <span>实时在线</span>
        </div>

        <div class="floating-card card-2">
          <el-icon><ChatDotRound /></el-icon>
          <span>消息已读</span>
        </div>

        <div class="floating-card card-3">
          <el-icon><Star /></el-icon>
          <span>安全加密</span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <span>向下滚动</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star, Download, VideoPlay, User, ChatDotRound } from '@element-plus/icons-vue'
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 70px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #fff5f7 0%, #f0f4ff 50%, #fff9e6 100%);
  z-index: -1;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 50%, rgba(0, 176, 133, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 50%, rgba(0, 143, 107, 0.06) 0%, transparent 50%);
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  animation: floatShape 20s infinite ease-in-out;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(0, 176, 133, 0.15), rgba(0, 212, 160, 0.1));
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(0, 212, 160, 0.12), rgba(0, 176, 133, 0.08));
  bottom: 20%;
  left: 5%;
  animation-delay: -5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: rgba(0, 176, 133, 0.1);
  top: 40%;
  left: 20%;
  animation-delay: -10s;
}

.shape-4 {
  width: 180px;
  height: 180px;
  background: rgba(0, 212, 160, 0.1);
  top: 60%;
  right: 25%;
  animation-delay: -15s;
}

@keyframes floatShape {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 80px;
}

.hero-content {
  z-index: 1;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--gradient-primary);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
  animation: fadeInUp 0.6s ease-out;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.title-line {
  display: block;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.title-highlight {
  display: block;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.hero-description {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 32px;
  max-width: 520px;
  animation: fadeInUp 0.6s ease-out 0.6s both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
  animation: fadeInUp 0.6s ease-out 0.8s both;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  transition: all var(--transition-normal);
  cursor: pointer;
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 4px 20px rgba(0, 176, 133, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 176, 133, 0.4);
}

.btn-secondary {
  background: white;
  color: var(--text-primary);
  border: 2px solid #e0e0e0;
}

.btn-secondary:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  animation: fadeInUp 0.6s ease-out 1s both;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 4px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background-color: #e0e0e0;
}

/* Hero Visual */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInRight 1s ease-out 0.5s both;
}

.phone-mockup {
  width: 280px;
  height: 560px;
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
              inset 0 2px 4px rgba(255, 255, 255, 0.8);
  position: relative;
  animation: phoneFloat 4s ease-in-out infinite;
}

@keyframes phoneFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
}

.screen-content {
  padding: 20px;
  background: linear-gradient(180deg, #fff5f7 0%, #ffffff 100%);
  height: 100%;
}

.chat-preview {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 40px;
}

.message {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.message-received {
  justify-content: flex-start;
}

.message-sent {
  justify-content: flex-end;
}

.message-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.message-bubble {
  max-width: 200px;
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.4;
}

.message-received .message-bubble {
  background: white;
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
}

.message-sent .message-bubble {
  background: var(--gradient-primary);
  color: white;
}

.phone-notch {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 28px;
  background: #1a1a2e;
  border-radius: 20px;
  z-index: 10;
}

.floating-card {
  position: absolute;
  background: white;
  padding: 12px 20px;
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  animation: floatCard 3s ease-in-out infinite;
}

.floating-card .el-icon {
  color: var(--primary-color);
}

.card-1 {
  top: 20%;
  right: -20px;
  animation-delay: 0s;
}

.card-2 {
  bottom: 35%;
  left: -30px;
  animation-delay: -1s;
}

.card-3 {
  bottom: 15%;
  right: 10%;
  animation-delay: -2s;
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--text-secondary);
  border-bottom: 2px solid var(--text-secondary);
  transform: rotate(45deg);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
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

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1199px) {
  .hero-title {
    font-size: 48px;
  }

  .hero-description {
    font-size: 16px;
  }

  .phone-mockup {
    width: 250px;
    height: 500px;
  }

  .shape-1 {
    width: 240px;
    height: 240px;
  }

  .shape-2 {
    width: 160px;
    height: 160px;
  }
}

@media (max-width: 991px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .hero-content {
    order: 1;
  }

  .hero-visual {
    order: 2;
  }

  .hero-description {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .floating-card {
    display: none;
  }

  .phone-mockup {
    width: 220px;
    height: 440px;
  }
}

@media (max-width: 767px) {
  .hero-section {
    min-height: auto;
    padding-top: 90px;
    padding-bottom: 60px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    justify-content: center;
    padding: 12px 28px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 16px;
  }

  .stat-divider {
    width: 40px;
    height: 1px;
  }

  .phone-mockup {
    width: 200px;
    height: 400px;
  }

  .scroll-indicator {
    display: none;
  }

  .shape {
    opacity: 0.3;
  }
}
</style>
