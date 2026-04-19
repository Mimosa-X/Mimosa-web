<template>
  <div class="faq-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>帮助中心</h1>
        <p>找到你需要的答案，或联系我们的支持团队</p>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection />

    <!-- Search Help -->
    <section class="search-help section">
      <div class="container">
        <div class="search-content">
          <h2>没有找到答案？</h2>
          <p>尝试搜索你的问题，或者浏览以下分类</p>
          
          <el-input
            v-model="searchQuery"
            placeholder="输入关键词搜索..."
            size="large"
            clearable
            class="search-input"
          >
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>

          <div class="help-categories">
            <a 
              v-for="(category, index) in helpCategories" 
              :key="index"
              href="#"
              class="category-card"
            >
              <el-icon :size="36"><component :is="category.icon" /></el-icon>
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
              <span class="category-count">{{ category.count }} 篇文章</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Options -->
    <section class="contact-options section">
      <div class="container">
        <h2 class="options-title">联系我们</h2>
        
        <div class="contact-grid">
          <div 
            v-for="(option, index) in contactOptions" 
            :key="index"
            class="contact-card"
          >
            <div class="contact-icon" :style="{ background: option.gradient }">
              <el-icon :size="32"><component :is="option.icon" /></el-icon>
            </div>
            <h3>{{ option.title }}</h3>
            <p>{{ option.description }}</p>
            <ul class="contact-details">
              <li v-for="(detail, i) in option.details" :key="i">{{ detail }}</li>
            </ul>
            <el-button :type="option.buttonType" round>{{ option.buttonText }}</el-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback Form -->
    <section class="feedback-section section">
      <div class="container">
        <div class="feedback-wrapper">
          <div class="feedback-info">
            <h2>提交反馈</h2>
            <p>我们重视每一条反馈，你的意见将帮助我们不断改进产品体验</p>
            
            <div class="feedback-benefits">
              <div class="benefit-item">
                <el-icon><Clock /></el-icon>
                <span>24 小时内回复</span>
              </div>
              <div class="benefit-item">
                <el-icon><Check /></el-icon>
                <span>专业团队处理</span>
              </div>
              <div class="benefit-item">
                <el-icon><Star /></el-icon>
                <span>持续跟踪进度</span>
              </div>
            </div>
          </div>

          <el-form 
            ref="feedbackFormRef"
            :model="feedbackForm"
            :rules="feedbackRules"
            label-position="top"
            class="feedback-form"
          >
            <el-form-item label="问题类型" prop="type">
              <el-select v-model="feedbackForm.type" placeholder="请选择问题类型" style="width: 100%">
                <el-option label="功能建议" value="suggestion" />
                <el-option label="Bug 反馈" value="bug" />
                <el-option label="账号问题" value="account" />
                <el-option label="其他" value="other" />
              </el-select>
            </el-form-item>

            <el-form-item label="问题描述" prop="description">
              <el-input
                v-model="feedbackForm.description"
                type="textarea"
                :rows="4"
                placeholder="请详细描述您遇到的问题或建议..."
              />
            </el-form-item>

            <el-form-item label="联系方式（选填）" prop="email">
              <el-input
                v-model="feedbackForm.email"
                placeholder="邮箱地址，方便我们回复您"
              />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="large" style="width: 100%" @click="submitFeedback">
                提交反馈
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import FAQSection from '../components/sections/FAQSection.vue'
import { 
  Search,
  User,
  Lock,
  Setting,
  ChatDotRound,
  Message,
  Phone,
  Clock,
  Check,
  Star,
  Headset
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const searchQuery = ref('')

const helpCategories = [
  {
    icon: 'User',
    title: '入门指南',
    description: '新用户必读，快速上手 Mimosa',
    count: 15
  },
  {
    icon: 'Lock',
    title: '账号与安全',
    description: '注册、登录、密码重置等',
    count: 23
  },
  {
    icon: 'Setting',
    title: '功能使用',
    description: '各项功能的详细使用说明',
    count: 45
  },
  {
    icon: 'ChatDotRound',
    title: '消息与通讯',
    description: '聊天、通话、群组等功能',
    count: 32
  }
]

const contactOptions = [
  {
    icon: 'ChatDotRound',
    title: '在线客服',
    description: '实时聊天，即时获得帮助',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    details: ['工作时间：7×24 小时', '平均响应时间：< 1 分钟'],
    buttonText: '开始对话',
    buttonType: 'primary' as const
  },
  {
    icon: 'Message',
    title: '邮件支持',
    description: '发送详细问题描述，我们会尽快回复',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    details: ['邮箱：support@mimosa.com', '回复时间：24 小时内'],
    buttonText: '发送邮件',
    buttonType: 'success' as const
  },
  {
    icon: 'Phone',
    title: '电话热线',
    description: '直接致电我们的客服团队',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    details: ['热线：400-888-9999', '服务时间：9:00-21:00'],
    buttonText: '拨打电话',
    buttonType: 'warning' as const
  }
]

const feedbackFormRef = ref<FormInstance>()
const feedbackForm = reactive({
  type: '',
  description: '',
  email: ''
})

const feedbackRules: FormRules = {
  type: [
    { required: true, message: '请选择问题类型', trigger: 'change' }
  ],
  description: [
    { required: true, message: '请描述您的问题', trigger: 'blur' },
    { min: 10, message: '描述至少需要10个字符', trigger: 'blur' }
  ]
}

const submitFeedback = async () => {
  if (!feedbackFormRef.value) return
  
  await feedbackFormRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('感谢您的反馈！我们会尽快处理')
      // 重置表单
      feedbackForm.type = ''
      feedbackForm.description = ''
      feedbackForm.email = ''
    }
  })
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #fff5f7 0%, #f0f4ff 100%);
  padding: 120px 0 60px;
  text-align: center;
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

/* Search Help */
.search-help {
  background-color: var(--bg-gray);
}

.search-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.search-content h2 {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.search-content > p {
  font-size: 16px;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.search-input {
  max-width: 600px;
  margin: 0 auto 48px;
}

.help-categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.category-card {
  background: white;
  padding: 28px 20px;
  border-radius: var(--border-radius-md);
  text-align: center;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.category-card .el-icon {
  color: var(--primary-color);
  margin-bottom: 16px;
}

.category-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.category-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 12px;
}

.category-count {
  font-size: 13px;
  color: var(--primary-color);
  font-weight: 500;
}

/* Contact Options */
.contact-options {
  background-color: white;
}

.options-title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 48px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.contact-card {
  background: var(--bg-gray);
  padding: 36px 28px;
  border-radius: var(--border-radius-lg);
  text-align: center;
  transition: all var(--transition-normal);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.contact-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 20px;
}

.contact-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.contact-card > p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.contact-details {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}

.contact-details li {
  font-size: 14px;
  color: var(--text-secondary);
}

/* Feedback Section */
.feedback-section {
  background-color: var(--bg-gray);
}

.feedback-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  background: white;
  padding: 60px;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
}

.feedback-info h2 {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.feedback-info > p {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 32px;
}

.feedback-benefits {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: var(--text-primary);
  font-weight: 500;
}

.benefit-item .el-icon {
  color: #52c41a;
  font-size: 20px;
}

.feedback-form {
  padding-top: 20px;
}

/* Responsive Design */
@media (max-width: 991px) {
  .page-header h1 {
    font-size: 36px;
  }

  .help-categories {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .feedback-wrapper {
    grid-template-columns: 1fr;
    padding: 40px;
  }
}

@media (max-width: 767px) {
  .page-header {
    padding: 100px 0 40px;
  }

  .page-header h1 {
    font-size: 28px;
  }

  .search-content h2 {
    font-size: 26px;
  }

  .help-categories {
    grid-template-columns: 1fr;
  }

  .options-title {
    font-size: 26px;
  }

  .feedback-wrapper {
    padding: 28px 20px;
  }

  .feedback-info h2 {
    font-size: 26px;
  }
}
</style>
