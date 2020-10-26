<template>
    <div class="homeTabs" @click="showImg">
        <img src="../../../assets/images/slideshow/lunbo01.png" v-if="!homeTabs" class="home-tabs-img"/>
        <img src="../../../assets/images/slideshow/lunbo02.jpg" v-if="homeTabs" class="home-tabs-img"/>
    </div>
</template>

<script>
export default {
    name:'HomeTabs',
    data(){
        return{
            homeTabs:false
        }
    },
    methods:{
        showImg () {
            this.homeTabs = ! this.homeTabs;
        }
    }
}
</script>

<style lang="scss" scoped>
    .homeTabs{
        width: 100%;
        height: 200px;
        .home-tabs-img{
            width: 100%;
            height: 200px;
        }
    }
</style>

