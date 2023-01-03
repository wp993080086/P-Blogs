<template>
  <el-config-provider :locale="i18nLocale">
    <div id="main">
      <transition
        enter-active-class="fade_enter-enter-active"
        leave-active-class="fade_leave-enter-active"
        mode="out-in"
      >
        <Header v-if="headerVisible" />
      </transition>
      <router-view v-slot="{ Component }">
        <transition name="ball_right" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { GridScrollOptions } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import zhTw from 'element-plus/lib/locale/lang/zh-tw'
import Header from '@/components/header/index.vue'
// import { debounce } from '@/utils'

const lang = {
  zhCn,
  en,
  zhTw
}
const i18nLocale = ref(lang.zhCn)
// const topOffset = ref(0)
const headerVisible = ref(true)
// const handleScrollFn = debounce((coord: GridScrollOptions) => {
//   // 导航栏是否可见取决于：滚动距离小于或等于导航栏高度或滚动方向为向上
//   headerVisible.value = coord.scrollTop! <= 45 || coord.scrollTop! < topOffset.value
//   topOffset.value = coord.scrollTop!
// }, 50)
</script>

<style lang="scss" scoped>
#main {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 45px;
}
</style>
