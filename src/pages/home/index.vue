<template>
  <div class="home_box" :style="{ height: aaa ? '400px' : '600px' }">
    <div class="banner_box">
      <div class="motto" @click="fn">天道酬勤 功不唐捐</div>
      <!-- <div class="arrows_box">
        <img :src="downArrows" class="down_arrows" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import downArrows from '@/static/images/down_arrows.png'
import { ref } from 'vue'
const aaa = ref(false)
const fn = () => {
  aaa.value = !aaa.value
}
</script>

<style lang="scss" scoped>
.home_box {
  position: relative;
  width: 100%;
  margin-top: 50px;
  // height: 1500px;
  // .banner_box {
  //   position: relative;
  //   width: 100vw;
  //   height: 100vh;
  //   background-image: url('../../static/images/Seabed.png');
  //   background-attachment: fixed;
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   background-size: cover;
  //   .motto {
  //     position: absolute;
  //     top: calc(50% - 50px);
  //     left: 0;
  //     width: 100%;
  //     height: 100px;
  //     font-size: 24px;
  //     color: #ffffff;
  //     font-family: cursive;
  //     text-align: center;
  //   }
  //   .arrows_box {
  //     position: absolute;
  //     left: 0;
  //     bottom: 0;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     animation: arrows 1s infinite linear;
  //     width: 100%;
  //     height: 30px;
  //     .down_arrows {
  //       width: 30px;
  //       height: 30px;
  //     }
  //   }
  // }
}
@keyframes arrows {
  0% {
    bottom: 50px;
    opacity: 1;
  }
  50% {
    bottom: 25px;
    opacity: 0.5;
  }
  100% {
    bottom: 0px;
    opacity: 0;
  }
}
</style>
