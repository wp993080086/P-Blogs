<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/header/index.vue'

const top = ref(0)
const handleScrollFn = (ev: TAnyType) => {
  top.value = ev.scrollTop
}
</script>

<template>
  <el-scrollbar @scroll="handleScrollFn">
    <div id="main_box">
      <Header :top="top" />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
#main_box {
  width: 100%;
  height: 100%;
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
