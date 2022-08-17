<script setup lang="ts">
import Header from '@/components/header/header'
</script>

<template>
  <Header />
    <div id="main_box">
      <el-scrollbar>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-scrollbar>
    </div>
</template>

<style lang="scss" scoped>
#main_box {
  width: 100%;
  height: calc(100% - 45px);
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
