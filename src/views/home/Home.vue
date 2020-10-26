<template>
    <div class="container">
        <div class="header">
            <home-header></home-header>
            <home-swiper></home-swiper>
            <home-nav-icons-contain></home-nav-icons-contain>
        </div>
        <div class="home-content-contain">
            <home-tabs></home-tabs>
        </div>
        
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeNavIconsContain from './components/HomeNavIconsContain'
import HomeTabs from './components/HomeTabs'

export default {
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeNavIconsContain,
        HomeTabs
    }
        
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100vw;
        height: 100vh;
    }
</style>
