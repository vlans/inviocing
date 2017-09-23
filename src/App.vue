<template>
  <div id="app">
    <head-menu></head-menu>
    <div class="zk-wrapper">
      <left-menu></left-menu>
      <router-view class="zk-container"></router-view>
    </div>
  </div>
</template>

<script>
import HeadMenu from './common/header.vue'
import LeftMenu from './common/left-menu.vue'

export default {
  name: 'app',
  components: {
    HeadMenu,
    LeftMenu
  }
}
</script>
<style lang="scss">
  html, body {
    height: 100%;
    min-width: 1200px;
    font-size: 16px;
  }
  #app {
    height: 100%;
  }
  .zk-wrapper {
    display: flex;
    height: calc(100% - 60px);
  }
  .zk-container {
    width: calc(100% - 240px);
    padding: 14px;
  }
</style>
