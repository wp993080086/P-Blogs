<template>
  <div id="header_box">
    <div id="header_box_pc">1</div>
    <div id="header_box_h5">2</div>
  </div>
</template>

<script setup lang="ts">
// import { reactive } from 'vue'

// interface Props {
//   top: number
// }

// const props = withDefaults(defineProps<Props>(), {
//   top: 0
// })

// const menuList = reactive([
//   { title: '个人主页', id: '001' },
//   { title: '前端工具', id: '002' }
// ])
</script>

<style lang="scss" scoped>
#header_box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 45px;
  background-color: var(--pdd-bg-color-page);
  #header_box_pc {
    width: 100%;
    height: 100%;
    background-color: var(--pdd-bg-color-page);
    color: var(--pdd-text-color-primary);
  }
  #header_box_h5 {
    width: 100%;
    height: 100%;
    background-color: var(--pdd-bg-color-page);
    color: var(--pdd-text-color-primary);
  }
}
@media screen and (min-width: 768px) {
  #header_box_h5 {
    display: none;
  }
  #header_box_pc {
    display: block;
  }
}
@media screen and (max-width: 768px) {
  #header_box_h5 {
    display: block;
  }
  #header_box_pc {
    display: none;
  }
}
</style>
