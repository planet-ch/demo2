<template>
  <div class="main">
    <header class="myInfo">
      <div class="BG">
        <img src="./../assets/img/bg2.jpg" alt="">
      </div>
      <div class="info">
        <div class="infoBox wrap">
          <h1 class="infoTitle">
            <a href="http://www.midawch.com/">Jinseyun</a>
          </h1>
          <p class="description">因为我躲在没风的地方</p>
          <a href="" class="down_arrow"></a>
        </div>
      </div>
    </header>
    <div class="home-page">
      <div id="content">
        <div class="wrap">
          <div class="leftBox">
            <div class="indent2">
              喜欢你的人很多，不缺我一个。我喜欢的人很少，除你就没了。
            </div>
            <h4>
              朋友+我Vxin: wch662688
            </h4>
            <swiper :options="swiperOption" ref="mySwiper" id="swiper">
              <!-- slides -->
              <swiper-slide><img src="./../assets/img/wangchunhui11.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="./../assets/img/wangchunhui22.jpg" alt="" class="rotate90"></swiper-slide>
              <swiper-slide><img src="./../assets/img/wangchunhui33.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="./../assets/img/wangchunhui66.jpg" alt="" class="rotate90"></swiper-slide>

              <!-- Optional controls -->
            </swiper>
          </div>
          <div class="rightBox"></div>
        </div>
      </div>
      <div class="footer">
        <div class="wrap text">
          <a href="">当时明月在，曾照彩云归</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          speed: 300,
          autoplay: {
            delay: 3000
          },
          autoplayDisableOnInteraction: false
        },
        imgUrl: ['./assets/img/wangchunhui1.jpg', './../assets/img/wangchunhui2.jpg', './../assets/img/wangchunhui3.jpg', './assets/img/wangchunhui6.jpg']
      }
    },
    created () {
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    }
  }
</script>
