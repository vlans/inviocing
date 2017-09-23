<template>
  <Row class="zk-left-menu">
    <Col>
      <Row v-for="(item, index) in menuData" :key="index" class="zk-left-nav" :class="{'zk-left-active': $route.name == item.path}">
        <Col>
          <Icon :type="item.icon" class="zk-icon" :style="{'font-size': item.size}"/>
          {{item.name}}
        </Col>
      </Row>
    </Col>
  </Row>
</template>
<script>
  import MenuData from './left-menu'
  export default {
    name: 'left-menu',
    methods: {
      _checkRouter () {
        var routeName = this.$route.name
        if (/dashboard/.test(routeName)) {
          this.menuData = MenuData.dashboard
        }
        if (/stock/.test(routeName)) {
        }
        if (/order/.test(routeName)) {
        }
        if (/logistics/.test(routeName)) {
        }
        if (/finance/.test(routeName)) {
        }
        if (/users/.test(routeName)) {
        }
        if (/auth/.test(routeName)) {
        }
      }
    },
    data () {
      return {
        menuData: []
      }
    },
    created () {
      this._checkRouter()
    }
  }
</script>
<style lang="scss" scoped>
  .zk-left-menu {
    width: 240px;
    border-right: 1px solid rgba(0,153,229,.9);
    font-size: 14px;
    text-indent: 1.5em;
  }
  .zk-left-nav {
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  .zk-left-active {
    background: #2d8cf0;
    color: #fff;
  }
  .zk-icon {
    margin-right: 6px;
  }
</style>
