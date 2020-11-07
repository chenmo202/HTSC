<style lang="scss" scoped>
.banner{
    overflow: hidden;
    height:0;
    padding-bottom: 55%;
    position: relative;
    .banner-img{
        width: 100%;
    }  
    .banner-info{ 
        display: flex;
        align-items: center;
        position: absolute ;
        left: 0;
        right: 0;
        bottom: 0;
        height: 30px;
        color: #ffffff;
        background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) ;//direction: 用角度值指定渐变方向(或角度)
        .banner-title {
            flex: 1;
            padding-left: 10px;
        }
        
        .banner-number{
            display: flex;
            align-items: center;
            padding: 0 20px;
            height: 20px;
            border-radius: 10px;
            background: rgba(0,0,0,.8);
            font-size: 12px;
            .banner-icon{
                font-size: 12px;
                margin-right: 3px;
            }
          
        }   
    }       
}          
</style>

<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe633;</span>
          <!-- 照片的个数 -->
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>

    <fade-animation>
      <common-gallerys
        :imgs="gallaryImgs"
        v-show="showGallerys"
        @close="handleGallerysClick"
      >
      </common-gallerys>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallerys from "../../../common/gallerys/Gallerys";
import FadeAnimation from "../../../common/fade/FadeAnimation";
export default {
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  components: {
    CommonGallerys,
    FadeAnimation,
  },
  data() {
    return {
      showGallerys: false,
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallerys = true;
    },
    handleGallerysClick() {
      this.showGallerys = false;
    },
  },
};
</script>

