<template>
    <div class="header">
      <div class="back iconfont iconreturn" v-show="backFlag"></div>
      <div class="title">贝壳社区团购</div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['backFlag']
}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .header{
    display: flex;
    align-items: center;
    position: relative;
    height: 92px;
    .back{
      position: absolute;
      left: 0;
      padding:0 20px;
      font-size: 36px;
    }
    .title{
      flex: 1;
      font-size: 36px;
      text-align: center;
    }
  }
</style>
