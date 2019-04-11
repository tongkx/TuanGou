<template>
  <div class="footer-nav">
    <router-link :to="{name: 'Home'}" class="tab">
      <span class="toolbar-icon iconfont iconmenu-"></span>
      <p class="text">首页</p>
    </router-link>
    <router-link :to="{name: 'Categroy'}" class="tab">
      <span class="toolbar-icon iconfont iconmenu-1"></span>
      <p class="text">分类</p>
    </router-link>
    <router-link :to="{name: 'ShppingCart'}" class="tab">
      <span class="toolbar-icon iconfont iconmenu-2"></span>
      <p class="text">购物车</p>
    </router-link>
    <router-link :to="{name: 'Me'}" class="tab">
      <span class="toolbar-icon iconfont iconmenu-3"></span>
      <p class="text">我的</p>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../assets/sass/var";
  .footer-nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 107px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    background: $bg-gray;
    .tab {
      padding: 0 8px;
      color: $c-gray;
      text-align: center;
      &.active{
        color: $c-pink;
      }
      .toolbar-icon{
        font-size: 40px; /*px*/
      }
      .text {
        padding-top: 18px;
        font-size: 20px; /*px*/
      }
    }
  }
</style>
