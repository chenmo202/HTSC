<template>
<div class="home-warppr">
        <div class="header">
            <home-header></home-header>
            <home-swiper></home-swiper>
            <home-nav-icons-contain></home-nav-icons-contain>
            
        </div>
        <div class="home-content-contain">
            <home-tabs></home-tabs>
            <home-switch></home-switch>
            <home-tab ></home-tab>
        </div>
        
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeNavIconsContain from './components/HomeNavIconsContain'
import HomeTabs from './components/HomeTabs'
import HomeSwitch from './components/HomeSwitch'
import HomeTab from './components/HomeTab'

export default {
    name: 'Home',
    beforeCreate(){
        document.querySelector('body').setAttribute('style','background: #f7f8fa')
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeNavIconsContain,
        HomeTabs,
        HomeSwitch,
        HomeTab
    },
        
}
</script>

<style lang="scss" scoped>
    .home-warppr{
        width: 100vw;
        height: 100vh;
    }
</style>
