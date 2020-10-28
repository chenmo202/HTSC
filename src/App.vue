<template>
  <div id="app" class="app" :style="{'height':height}">
    <!-- <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive> -->
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
//exclude="Detail" DEtail页面不缓存了
export default {
  data(){
    return{
      height:''
    }
  },
  mounted(){
    this.height = window.innerHeight + 'px'
  }
}
</script>

<style lang="scss">
  
</style>
