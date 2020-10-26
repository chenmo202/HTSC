<template>
    <div class="switch">
        <swiper :options="swiperOption" class="swiper-switch">
            <swiper-slide class="swipe-switch">
                <span class="swipe-span">陈龙</span>
            </swiper-slide>
            <swiper-slide class="swipe-switch">
                <span class="swipe-span">成龙</span>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// import "swiper/dist/css/swiper.css"
// import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    // data(){

    // },
    computed:{
        swiperOption () {
            return{
                loop: true, //循环
                autoplay: {
                delay: 1000
                
                }, //可选选项，自动滑动
                speed: 1500,
                direction: "vertical",
            }
        }
        
    }
    
}
</script>

<style lang="scss" scoped>
    .switch{
        width: 100%;
        height: 30px;
        .swiper-switch{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            .swipe-span{
                width: 100%;
            }

        }
    }
</style>
   
