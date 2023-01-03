<template>
  <div id="header_box">
    <div id="header_pc">
      <div class="header_l">
        <div class="logo_box">
          <img :src="logo" alt="logo" />
        </div>
        <div v-for="item in menuList" :key="item.path" class="menu_box">
          <div class="menu_item">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div id="header_h5">2</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/static/images/logo.png'

// interface Props {
//   top: number
// }

// const props = withDefaults(defineProps<Props>(), {
//   top: 0
// })

const menuList = ref([
  { title: '前端宝库', path: '', icon: '' },
  { title: '每日金句', path: '', icon: '' },
  { title: '我的菜谱', path: '', icon: '' }
])
</script>

<style lang="scss" scoped>
#header_box {
  width: 100%;
  height: 84px;
  background-color: var(--pdd-bg-color-page);
  #header_pc {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: var(--pdd-bg-color);
    border-bottom: 1px solid var(--pdd-border-color);
    .header_l {
      .logo_box {
        width: 64px;
        height: 64px;
      }
      .menu_box {
        display: flex;
        align-items: center;
        justify-content: center;
        .menu_item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px 20px;
        }
      }
    }
    .header_r {
      height: 100%;
    }
  }
  #header_h5 {
    width: 100%;
    height: 100%;
  }
}
@media screen and (min-width: 768px) {
  #header_h5 {
    display: none;
  }
  #header_pc {
    display: block;
  }
}
@media screen and (max-width: 768px) {
  #header_h5 {
    display: block;
  }
  #header_pc {
    display: none;
  }
}
</style>
