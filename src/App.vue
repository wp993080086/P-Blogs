<template>
  <div id="main_box" @scroll="handleScrollFn">
    <Header :top="top" />
    <router-view v-slot="{ Component }">
      <transition name="fade_enter" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '@/components/header/index.vue'

const top = ref(0)
const handleScrollFn = (ev: TDict) => {
  top.value = ev.scrollTop
}
onMounted(() => {
  window.onresize = () => {
    console.log(document.documentElement.scrollTop)
  }
})
</script>

<style lang="scss" scoped>
#main_box {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
html {
  width: 100%;
}
</style>
