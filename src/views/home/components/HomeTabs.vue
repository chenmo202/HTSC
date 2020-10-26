<template>
    <div class="homeTabs" @click="showImg">
        <img src="../../../assets/images/slideshow/lunbo01.png" v-if="!homeTabs" />
        <img src="../../../assets/images/slideshow/lunbo02.jpg" v-if="homeTabs" />
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

<style>

</style>