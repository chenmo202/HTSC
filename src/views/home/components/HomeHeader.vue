<style lang="scss" scoped>
.home-header {
  width: 100%;
  height: 46px;
  background: #fff;
  .search {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 46px;
    .search-swipe-container {
      height: 33px;
      flex: 1;
      padding-right: 16px;
      .search-box {
        display: flex;
        flex: 1;
        // justify-content: flex-start;//从起点线开始顺序排列，默认值
        align-items: center;
        background: #f7f8fa;
        border-radius: 5px;
        opacity: 0.9;
        margin-left: 15px;
        height: 33px;
        .icon-search {
          padding: 5px;
          color: #b2b2b2;
          font-weight: 600;
        }
        .search-text-swipe {
          position: relative;
          width: 189px;
          height: 33px;
          color: #b2b2b2;
          font-weight: 400;
          font-size: 12px;
          .input-home-search {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            // margin: auto;
            background: transparent;
            border: 0;
          }
          .home-swipe-box {
            width: 100%;
            height: 100%;
            background: #f7f8fa;
            // overflow: hidden;
            .swiper-box {
                width: 100%;
                height: 100%;
                // height: 100% !important;
                .swipe-slide{
                    font-size: 14px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    .swipe-span{
                        line-height: 33px;
                    }
                }
                
            }
          }
        }
      }
    }
    .user-login {
      width: 52px;
      color: #333;
      font-weight: 500;
      font-size: 16px;
    }
  }
}
</style>

<template>
  <div class="home-header">
    <div class="search">
      <div class="search-swipe-container">
        <div class="search-box" @click="searchs">
          <div class="iconfont icon-search">&#xe602;</div>
          <div class="search-text-swipe">
            <input
              type="text"
              placeholder="搜一搜"
              disableb="disabled"
              class="input-home-search"
            />
            <div class="home-swipe-box swiper-no-swiping">
              <swiper :options="swiperOptions" class="swiper-box">
                <swiper-slide v-for="(slide, index) in newsList" :key="index" class="swipe-slide">
                  <span class="swipe-span">{{ slide.title }}</span>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <div class="user-login" @click="$router.push({path:'/Login'})">登录</div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css"
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
  name: "HomeHeader",
  data() {
    return {
      newsList: [
        {
          title: " 撒欢节 ",
        },
        {
          title: " realme 真我Q2 ",
        },
        {
          title: " OPPO 智能电视 ",
        },
        {
          title: " 一加 8T ",
        },
        {
          title: "  OPPO专区  ",
        },
        {
          title: " 一加 8T ",
        },
        {
          title: "  一加手机专区 ",
        }
      ],
    };
  },
  methods:{
    searchs(){
      this.$router.push({path:'/Search-sahuanjie'})
    }
  },
  components: {
    swiper,
    swiperSlide,
  },
  computed: {
    swiperOptions () {
        return{
            loop: true, //循环
            autoplay: 6000,
             //可选选项，自动滑动
            slidesPerView: 1,
            speed: 1000,
            direction: "vertical",
            // observer: true,
            // observeParents: true,
            // mousewheel: false,
            // noSwiping: true
        }
    }
  }
}
</script>

