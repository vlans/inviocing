<template>
  <Row class="zk-head" type="flex">
    <Col class="zk-logo">
      <img src="2.jpg" alt="中凯华际" title="中凯华际"/>
    </Col>
    <Col class="zk-head-nav">
      <Row class="zk-nav-container">
        <Col 
          v-for="(item, index) in menuData" 
          :key="index" 
          class="zk-nav"
          :class="{'zk-nav-active': $route.matched[0].path == item.path}"
          @click.native="Go(item.path)"
          ><Icon :type="item.icon" class="zk-icon" :style="{'font-size': item.size}"/>{{item.name}}
        </Col>
        <Col class="zk-user">
          <Avatar class="zk-user-avatar" icon="person" />
          <span class="zk-user-name">admin-test</span>
          <Icon type="power" class="zk-logout"></Icon>
        </Col>
      </Row>
    </Col>
  </Row>
</template>
<script>
  import Menu from './header'
  export default {
    name: 'header',
    methods: {
      Go (path) {
        this.$router.push(path)
      }
    },
    data () {
      return {
        menuData: Menu
      }
    }
  }
</script>
<style lang="scss" scoped>
  .zk-head {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid rgba(0,153,229,.9);
    .zk-logo {
      height: 100%;
      width: 240px;
      cursor: pointer;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .zk-nav {
      height: 100%;
      float: left;
      cursor: pointer;
      text-align: right;
      width: 100px;
    }
    .zk-nav-active {
      color: #2d8cf0;
    }
  }
  .zk-head-nav {
    height: 100%;
    width: calc(100% - 240px);
    .zk-nav-container {
      height: 100%;
      .zk-user {
        float: right;
        padding-right: 24px;
        line-height: 60px;
      }
    }
  }
  .zk-user-name {
    margin-right: 6px;
    cursor: pointer;
  }
  .zk-user-avatar {
    vertical-align: middle;
    background: #2d8cf0;
    margin-right: 6px;
    cursor: pointer;
  }
  .zk-logout {
    cursor: pointer;
  }
  .zk-icon {
    line-height: 60px;
    margin-right: 8px;
  }
</style>
