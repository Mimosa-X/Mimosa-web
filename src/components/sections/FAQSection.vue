<template>
  <section id="faq" class="faq-section section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-badge">帮助中心</span>
        <h2 class="section-title">常见问题</h2>
        <p class="section-description">
          这里汇集了用户最常问到的问题，希望能帮助你快速了解 Mimosa
        </p>
      </div>

      <!-- FAQ Categories -->
      <div class="faq-categories">
        <button
          v-for="(category, index) in categories"
          :key="index"
          :class="['category-btn', { active: activeCategory === index }]"
          @click="activeCategory = index"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- FAQ List -->
      <div class="faq-list">
        <el-collapse v-model="activeFaq" accordion>
          <el-collapse-item 
            v-for="(faq, index) in filteredFaqs" 
            :key="index"
            :name="index"
          >
            <template #title>
              <div class="faq-question">
                <el-icon><QuestionFilled /></el-icon>
                <span>{{ faq.question }}</span>
              </div>
            </template>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
              <div v-if="faq.link" class="faq-link">
                <a :href="faq.link.url">{{ faq.link.text }} →</a>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <!-- Contact Support -->
      <div class="support-cta">
        <div class="support-icon">
          <el-icon :size="48"><Headset /></el-icon>
        </div>
        <h3>没有找到答案？</h3>
        <p>我们的客服团队 7×24 小时在线，随时为你提供帮助</p>
        <div class="support-actions">
          <el-button type="primary" size="large" round>
            <el-icon><ChatDotRound /></el-icon>
            在线客服
          </el-button>
          <el-button size="large" round>
            <el-icon><Message /></el-icon>
            提交工单
          </el-button>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="quick-links">
        <a href="#" class="quick-link-card">
          <el-icon :size="32"><Document /></el-icon>
          <h4>使用指南</h4>
          <p>详细的功能说明和操作教程</p>
        </a>
        <a href="#" class="quick-link-card">
          <el-icon :size="32"><VideoCamera /></el-icon>
          <h4>视频教程</h4>
          <p>手把手教你使用各项功能</p>
        </a>
        <a href="#" class="quick-link-card">
          <el-icon :size="32"><Notebook /></el-icon>
          <h4>更新日志</h4>
          <p>查看最新版本的功能改进</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  QuestionFilled,
  Headset,
  ChatDotRound,
  Message,
  Document,
  VideoCamera,
  Notebook
} from '@element-plus/icons-vue'

const activeCategory = ref(0)
const activeFaq = ref(0)

const categories = [
  { name: '全部', value: 'all' },
  { name: '账号相关', value: 'account' },
  { name: '功能使用', value: 'features' },
  { name: '下载安装', value: 'download' },
  { name: '隐私安全', value: 'privacy' }
]

const faqs = [
  {
    category: 'account',
    question: '如何注册 Mimosa 账号？',
    answer: '注册非常简单！你可以通过手机号码、邮箱地址或第三方账号（微信、QQ、Apple ID）快速注册。只需点击首页的"注册"按钮，按照提示填写信息即可完成注册。整个过程不到1分钟。',
    link: null
  },
  {
    category: 'account',
    question: '忘记密码怎么办？',
    answer: '别担心，重置密码很方便。在登录页面点击"忘记密码"，输入你注册时使用的手机号或邮箱，我们会发送验证码给你。验证通过后即可设置新密码。你也可以选择通过第三方账号登录。',
    link: { url: '#', text: '查看详细的密码重置指南' }
  },
  {
    category: 'features',
    question: 'Mimosa 支持哪些聊天功能？',
    answer: 'Mimosa 支持丰富的即时通讯功能：文字消息（支持表情、图片、文件）、语音消息、视频通话（支持1080P高清）、群聊（最多500人）、消息撤回、已读回执、消息加密等。我们还提供了智能翻译功能，可以实时翻译外语消息。',
    link: null
  },
  {
    category: 'features',
    question: '如何创建和管理群组？',
    answer: '创建群组很简单：进入消息界面，点击右上角的"+"号，选择"创建群组"，邀请好友加入即可。作为群主，你可以设置群名称、头像、公告，管理成员权限，开启/关闭消息免打扰等功能。我们支持多种群管理工具让社群运营更轻松。',
    link: null
  },
  {
    category: 'download',
    question: 'Mimosa 支持哪些平台？',
    answer: 'Mimosa 目前支持全平台覆盖：iOS（iPhone/iPad）、Android 手机和平板、Windows、macOS、Linux 桌面系统，以及 Web 网页版。无论你使用什么设备，都能享受一致的优质体验。所有平台数据实时同步。',
    link: { url: '/download', text: '前往下载页面' }
  },
  {
    category: 'download',
    question: '安装失败怎么办？',
    answer: '如果遇到安装问题，请尝试以下步骤：1）确保设备存储空间充足；2）检查网络连接是否稳定；3）允许应用安装未知来源（仅限 Android）；4）重启设备后重试。如果问题仍然存在，请联系我们的技术支持团队获取帮助。',
    link: null
  },
  {
    category: 'privacy',
    question: '我的数据安全吗？',
    answer: '安全是我们的首要任务。Mimosa 采用端到端加密（E2EE）技术保护你的所有通信内容，即使是我们的工程师也无法读取你的私人消息。你的个人数据存储在符合国际标准的安全服务器上，并严格遵守 GDPR 和中国个人信息保护法等法规要求。',
    link: { url: '/privacy', text: '阅读完整的隐私政策' }
  },
  {
    category: 'privacy',
    question: '如何保护我的隐私？',
    answer: 'Mimosa 提供了全面的隐私控制工具：你可以设置谁可以找到你、谁可以查看你的动态、是否显示在线状态等。还支持阅后即焚、隐私模式、双重认证等高级功能。我们建议开启双重认证以增强账户安全性。',
    link: null
  }
]

const filteredFaqs = computed(() => {
  if (activeCategory.value === 0) {
    return faqs
  }
  const categoryValue = categories[activeCategory.value].value
  return faqs.filter(faq => faq.category === categoryValue)
})
</script>

<style scoped>
.faq-section {
  background-color: var(--bg-gray);
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
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

/* Categories */
.faq-categories {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 10px 24px;
  background: var(--bg-card);
  border: 2px solid var(--border-color);
  border-radius: 25px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.category-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.category-btn.active {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
}

/* FAQ List */
.faq-list {
  max-width: 800px;
  margin: 0 auto 60px;
  background: var(--bg-card);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  padding: 8px 0;
}

.faq-question .el-icon {
  color: var(--primary-color);
  font-size: 20px;
  flex-shrink: 0;
}

.faq-answer {
  padding: 16px 0 24px 32px;
  line-height: 1.7;
  color: var(--text-secondary);
  font-size: 15px;
}

.faq-link {
  margin-top: 12px;
}

.faq-link a {
  color: var(--primary-color);
  font-weight: 500;
  transition: all var(--transition-fast);
}

.faq-link a:hover {
  gap: 6px;
}

/* Support CTA */
.support-cta {
  background: var(--bg-card);
  padding: 48px;
  border-radius: var(--border-radius-lg);
  text-align: center;
  box-shadow: var(--shadow-md);
  margin-bottom: 60px;
}

.support-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(0, 176, 133, 0.1), rgba(0, 212, 160, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: var(--primary-color);
}

.support-cta h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.support-cta p {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 28px;
}

.support-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Quick Links */
.quick-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.quick-link-card {
  background: var(--bg-card);
  padding: 32px 24px;
  border-radius: var(--border-radius-md);
  text-align: center;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
}

.quick-link-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.quick-link-card .el-icon {
  color: var(--primary-color);
  margin-bottom: 16px;
}

.quick-link-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.quick-link-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1199px) {
  .section-title {
    font-size: 36px;
  }

  .quick-links {
    grid-template-columns: repeat(2, 1fr);
  }

  .quick-link-card:last-child {
    grid-column: span 2;
    max-width: 50%;
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
  }

  .faq-categories {
    gap: 8px;
  }

  .category-btn {
    padding: 8px 18px;
    font-size: 14px;
  }

  .faq-question {
    font-size: 15px;
  }

  .faq-answer {
    padding-left: 16px;
    font-size: 14px;
  }

  .support-cta {
    padding: 32px 24px;
  }

  .support-cta h3 {
    font-size: 24px;
  }

  .support-actions {
    flex-direction: column;
  }

  .support-actions .el-button {
    width: 100%;
  }

  .quick-links {
    grid-template-columns: 1fr;
  }

  .quick-link-card:last-child {
    grid-column: span 1;
    max-width: 100%;
  }
}
</style>
