<template>
    <div>
      <ul class="product-list">
        <li v-for="(item, index) in proList" :key="index">
          <a href="###" class="product-pic"><img :src="item.imageUrl" alt=""></a>
          <div class="product-info">
            <a href="###" class="d-title">{{item.title}}</a>
            <div class="product-coupon-wrap">
              <div class="product-coupon"><span class="type">券</span><span class="coupon-num">{{item.coupon}}</span></div>
            </div>
            <div class="price-wrapper">
        <span class="price">
          <em class="unit">￥</em>
          <span class="price-num">{{item.price}}</span>
        </span>
              <span class="old-price">
          <em class="unit">￥</em>
          <span class="price-num">{{item.oldPrice}}</span>
        </span>
            </div>
            <div class="addcart" @click="addCart">
              <span class="add-shop-icon iconfont iconaddshopping"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'good',
  props: ['proList'],
  methods: {
    addCart () {
      console.info('123')
    }
  }
}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../../assets/sass/var";
  .product-list{
    li{
      position: relative;
      margin: 12px 0 15px;
      padding:0 30px 0 0;
      .product-info{
        position: relative;
        height: 204px;
        padding-left: 250px;
      }
      .d-title{
        line-height: 36px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        font-size: 30px; /*px*/
        color: $c-dark;
      }
      .product-coupon-wrap{
        margin-top: 18px;
      }
      .product-coupon{
        display: inline-block;
        height: 26px;
        line-height: 26px;
        border: 1px solid $c-pink;
        font-size: 0;
        border-radius: 5px;
        .type{
          padding: 0 6px;
          background: $c-pink;
          font-size: 20px; /*px*/
          color: #fff;
        }
        .coupon-num{
          padding: 0 8px;
          color: $c-pink;
          font-size: 20px; /*px*/
        }
      }
      .price-wrapper{
        position: absolute;
        bottom: 10px;
        line-height: 24px;
        .price{
          font-size: 32px; /*px*/
        }
        .old-price{
          margin-left: 8px;
          font-size: 18px;
          color: $c-gray;
          text-decoration: line-through;
        }
      }
      .addcart{
        position: absolute;
        right: 0;
        bottom: 15px;
        .add-shop-icon{
          padding: 12px;
          color: #fff;
          background: $c-pink;
          font-size: 36px;
          border-radius: 100%;
        }

      }
    }
    .product-pic{
      position: absolute;
      top: 0;
      left: 30px;
      width: 200px;
      height: 204px;
      img{
        width: 100%;
      }
    }
  }
</style>
