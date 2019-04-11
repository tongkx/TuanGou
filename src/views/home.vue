<template>
  <div>
    <div class="new-swiper-wrapper">
      <swiper :options="swiperOption">
        <swiperSlide v-for="(swiper, index) in swiperList" :key="index"><img :src="swiper" alt="" class="swiper-pic">
        </swiperSlide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
    <div class="head_nav">
      <div class="head_nav_scroll">
        <a href="javascript:" v-for="(nav, index) in navList" :key="index">{{ nav }}</a>
      </div>
    </div>
    <good :proList="proList"></good>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import good from '@/components/good/good'

export default {
  name: 'Home',
  components: {
    swiper: swiper,
    swiperSlide: swiperSlide,
    good: good
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      },
      swiperList: ['static/images/01.jpg', 'static/images/01.jpg', 'static/images/01.jpg', 'static/images/01.jpg', 'static/images/01.jpg'],
      navList: ['热卖', '团购', '女装', '百货', '鞋包', '食品', '母婴'],
      proList: [
        {
          imageUrl: 'static/images/pro1.jpg',
          title: '2019春装新款文艺翻领衬衫',
          coupon: '10',
          price: '218.5',
          oldPrice: '568'
        },
        {
          imageUrl: 'static/images/pro2.jpg',
          title: '2019秋装新款文艺翻领衬衫',
          coupon: '10',
          price: '218.5',
          oldPrice: '568'
        },
        {
          imageUrl: 'static/images/pro1.jpg',
          title: '2019春装新款文艺翻领衬衫',
          coupon: '10',
          price: '218.5',
          oldPrice: '568'
        },
        {
          imageUrl: 'static/images/pro2.jpg',
          title: '2019秋装新款文艺翻领衬衫',
          coupon: '10',
          price: '218.5',
          oldPrice: '568'
        },
        {
          imageUrl: 'static/images/pro1.jpg',
          title: '2019春装新款文艺翻领衬衫',
          coupon: '10',
          price: '218.5',
          oldPrice: '568'
        },
        {
          imageUrl: 'static/images/pro2.jpg',
          title: '2019秋装新款文艺翻领衬衫',
          coupon: '10',
          price: '218.5',
          oldPrice: '568'
        },
        {
          imageUrl: 'static/images/pro1.jpg',
          title: '2019春装新款文艺翻领衬衫',
          coupon: '10',
          price: '218.5',
          oldPrice: '568'
        },
        {
          imageUrl: 'static/images/pro2.jpg',
          title: '2019秋装新款文艺翻领衬衫',
          coupon: '10',
          price: '218.5',
          oldPrice: '568'
        }
      ]
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../assets/sass/var";

  .swiper-pagination {
    width: 100%;
    bottom: 6px;

    .swiper-pagination-bullet {
      width: 15px;
      height: 15px;
      margin: 0 10px;
      background: none;
      border: 3px solid #fff;
      opacity: 1;

      &.swiper-pagination-bullet-active {
        background: $c-pink;
        border: 0;
      }
    }
  }
</style>
<style lang="scss" scoped rel="stylesheet/scss">
  @import "../assets/sass/var";

  .new-swiper-wrapper {
    width: 100%;
    height: 240px;
    overflow: hidden;
    background: #ddd;
    position: relative;
  }

  .swiper-pic {
    width: 100%;
    height: 100%;
  }

  .head_nav {
    position:sticky;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    margin-top: 6px;
    background: #fff;
    z-index: 999;
    box-shadow: 0 1px 0 rgba(0,0,0,.05), 0 0.5px 0 rgba(0,0,0,.09);
  }

  .head_nav_scroll {
    font-size: 0;
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    height: 68px;
    line-height: 68px;

    a {
      color: $c-dark;
      padding: 0 20px;
      margin-left: 20px;
      font-size: 28px;
    }
  }

  .head_nav .head_nav_scroll::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

</style>
