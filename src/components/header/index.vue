<script setup lang="ts">
import { reactive, watch, ref } from 'vue'

interface Props {
  top: number
}

const props = withDefaults(defineProps<Props>(), {
  top: 0
})

const menuList = reactive([
  { title: '个人主页', id: '001', icon: 'iconfont pdd-home' },
  { title: '前端工具', id: '002', icon: 'iconfont pdd-tool' }
])
const isShow = ref(true)
// 监听滚动距离
watch(
  () => props.top,
  (newValue, oldValue) => {
    if (newValue && oldValue) {
      newValue > oldValue ? (isShow.value = false) : (isShow.value = true)
    }
    if (newValue === 0) isShow.value = true
  },
  { deep: true }
)

const showMenu = ref(false)
const fn = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <transition name="fade" mode="out-in">
    <div id="header_box" v-if="isShow">
      <div id="header_box_pc">
        <div class="header_main">
          <div class="name_box">鹏多多</div>
          <div class="menu_box">
            <template v-for="item in menuList" :key="item.id">
              <div class="menu_item">
                <i :class="item.icon"></i>
                <span class="menu_item_title">{{ item.title }}</span>
                <div class="menu_item_line"></div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div id="header_box_h5">
        <div class="header_main">
          <div class="name_box">鹏多多</div>
          <div class="menu_box" @click="fn">
            <i class="iconfont pdd-menu"></i>
          </div>
          <transition name="fade" mode="out-in">
            <div class="menu_main" v-if="showMenu">
              <template v-for="item in menuList" :key="item.id">
                <div class="menu_item">
                  <i :class="item.icon"></i>
                  <span class="menu_item_title">{{ item.title }}</span>
                  <div class="menu_item_line"></div>
                </div>
              </template>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
#header_box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 45px;
  #header_box_pc {
    width: 100%;
    height: 45px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    overflow: hidden;
    padding: 0px 30px;
    .header_main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      .name_box {
        display: flex;
        align-items: center;
        width: 60px;
        height: 100%;
        font-family: cursive;
      }
      .menu_box {
        display: flex;
        width: 240px;
        height: 100%;
        .menu_item {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          position: relative;
          .menu_item_title {
            cursor: pointer;
            margin-left: 10px;
          }
          .menu_item_line {
            position: absolute;
            left: 20px;
            bottom: 0;
            width: 0px;
            height: 2px;
            background-color: #ffffff;
            transition: 0.3s ease;
          }
          &:hover .menu_item_line {
            width: 80px;
          }
        }
      }
    }
  }
  #header_box_h5 {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 45px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transition: 0.5s ease;
    .header_main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding: 0px 20px;
      width: 100%;
      height: 100%;
      .name_box {
        display: flex;
        align-items: center;
        width: 60px;
        height: 100%;
        font-family: cursive;
      }
      .menu_box {
        width: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        .iconfont {
          font-size: 20px;
        }
      }
      .menu_main {
        width: 100%;
        height: auto;
        position: absolute;
        top: 45px;
        left: 0;
        background-color: rgba(255, 255, 255, 0.2);
        .menu_item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 40px;
          border-top: 1px solid #f1f1f1;
          .menu_item_title {
            cursor: pointer;
            margin-left: 10px;
          }
        }
      }
    }
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
