<style lang="scss" scoped>
    // >>>穿透作用，因为swiper-pagination-bullet-active类在组件内部定义的，想要wrapper也能作用到，可以用>>>
    // .wrapper >>>.swiper-pagination-bullet{
    //     background: red;
    // }
    // .wrapper >>>.swiper-pagination-bullet-active{
    //     background: #fff !important
    //     // background:hsla(0,0%,100%,0);
    // }
    // .wrapper{
    //     width: 100%;
    //     overflow: hidden;
    //     height: 0;
    //     padding-bottom: 54.5%;
    //     // .swiper-container{
    //     //     width: 100%;
    //     //     height: 200px;
    //     //     overflow: hidden;
    //     // }
    //     .swiper-img{
    //         width: 100%;
    //         height: 100%;
    //     }
    // }
    .banner /deep/ .van-swipe__indicator:not(:last-child) {
        margin-right: 8px;
    }
    .banner /deep/ .van-swipe__indicator {
        // width: 7px;
        // height: 7px;
        border: 1px solid #fff;
        border-radius: 50%;
        opacity: 1;
        background: hsla(0,0%,100%,0);
       
    }
    .banner /deep/ .van-swipe__indicator--active {
        // width: 7px;
        // height: 7px;
        background: #fff;
        
    }
    
    
    .banner{
       width: 100%;
       .my-swipe_l {
            width: 100%;
            height: 200px;
            overflow: hidden;
            .van-swipe__track 
            .swipe_img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>

<template>
    <!-- <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container">
            <swiper-slide 
                class="swiper-item"
                v-for="item of swiperList"
                :key="item.id"
            >
                <img class="swiper-img"  :src="item.imgUrl" />
            </swiper-slide>
        
            <div class="swiper-pagination wrapper-pagin"  slot="pagination"></div>
        </swiper>
    </div> -->

    <div class="banner">
        <van-swipe class="my-swipe_l" 
            :autoplay="3000" 
            indicator-color="white"
            v-if="showSwiper"
        >
            <van-swipe-item class="swipe_item" v-for="item of swiperList" :key="item.id">
                <img v-lazy="item.imgUrl" class="swipe_img"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data(){
        return{
            // swiperOption:{
            //     // 参数选项,显示小点
            //     pagination:'.swiper-pagination',
            //     //循环
            //     loop:true,
            //     //每张播放时长3秒，自动播放
            //     autoplay:2000,
            //     autoplayDisableOnInteraction : false, //用户操作swiper之后，是否禁止autoplay 
            //     //滑动速度
            //     speed:1000,
            //     // delay:1000     
            // },
            swiperList:[
                {
                    id:'001',
                    imgUrl:require('../../../assets/images/slideshow/lunbo01.png')
                },
                {
                    id:'002',
                    imgUrl:require('../../../assets/images/slideshow/lunbo02.jpg')
                },
                {
                    id:'003',
                    imgUrl:require('../../../assets/images/slideshow/lunbo03.jpg')
                },
                {
                    id:'004',
                    imgUrl:require('../../../assets/images/slideshow/lunbo04.jpg')
                },
                {
                    id:'005',
                    imgUrl:require('../../../assets/images/slideshow/lunbo05.jpg')
                }
            ] 
        }  
    },
    computed:{
        showSwiper(){
            return this.swiperList.length
        }
    }    
}
</script>

