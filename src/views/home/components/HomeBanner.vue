<template>
    <div class="home-banner">
        <img src="../../../assets/images/slideshow/lunbo01.png" class="home-banner-img" @click="$router.push({path:'/Detail'})"/>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .home-banner{
        width: 100%;
        height: 200px;
        .home-banner-img{
            width: 100%;
            height: 100%;
        }
    }
</style>

