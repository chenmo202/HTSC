<template>
    <div>
        <router-view></router-view>
        <footer-tab @taptabs="taptabs"  v-if="$route.meta.shows"></footer-tab>
    </div>
</template>

<script>
import FooterTab from '../components/foot'
export default {
    name:'Tabs',
    data(){
        return{
            count:0
        }
    },
    components: {
        FooterTab
    },
    methods: {
        taptabs(item) {
            this.$router.push({path: item.route})
        }
    },
    watch: { // 监听路由变化
        $route (to, from) {
            let ThisPage = to.name;
            if (ThisPage === 'Home.vue' || ThisPage === 'Classify.vue' || ThisPage === 'Mine.vue' ) {
                this.shows = true;
            } else {
                this.shows = false;
            }
        }
    },

}
</script>

<style lang="scss" scoped>

</style>

