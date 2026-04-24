<template>
  <div id="mimosa-app">
    <!-- Ribbons 丝带效果背景层 -->
    <div class="ribbons-layer">
      <Ribbons
        :colors="['#3DDC84']"
        :base-spring="0.03"
        :base-friction="0.9"
        :base-thickness="35"
        :offset-factor="0"
        :max-age="500"
        :point-count="60"
        :speed-multiplier="0.6"
        :enable-fade="true"
        :enable-shader-effect="false"
        :effect-amplitude="2"
        :background-color="[0, 0, 0, 0]"
      />
    </div>
    
    <!-- 流体光标效果层 -->
    <SplashCursor
      :SIM_RESOLUTION="128"
      :DYE_RESOLUTION="1440"
      :CAPTURE_RESOLUTION="512"
      :DENSITY_DISSIPATION="3.5"
      :VELOCITY_DISSIPATION="2"
      :PRESSURE="0.1"
      :PRESSURE_ITERATIONS="20"
      :CURL="3"
      :SPLAT_RADIUS="0.2"
      :SPLAT_FORCE="6000"
      :SHADING="true"
      :COLOR_UPDATE_SPEED="10"
      :BACK_COLOR="{ r: 0, g: 0.5, b: 0.3 }"
      :TRANSPARENT="true"
    />
    
    <!-- 导航栏和内容层 -->
    <FloatingNavBar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import FloatingNavBar from './components/layout/FloatingNavBar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import SplashCursor from './components/effects/SplashCursor.vue'
import Ribbons from './components/effects/Ribbons.vue'
</script>

<style scoped>
#mimosa-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Ribbons 背景层 - 最底层 */
.ribbons-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  pointer-events: none;
}

/* 内容层 - 在效果之上 */
.main-content {
  flex: 1;
  position: relative;
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
