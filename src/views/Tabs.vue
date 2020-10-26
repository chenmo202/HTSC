<template>
    <div>
        <router-view></router-view>
        <footer-tab @taptabs="taptabs"></footer-tab>
    </div>
</template>

<script>
import FooterTab from '../components/foot'
export default {
    name:'Tabs',
    data(){
        return{
            // count:0
        }
    },
    components: {
        FooterTab
    },
    methods: {
        taptabs(item) {
            this.$router.push({path: item.route})
        }
    }

}
</script>

<style lang="scss" scoped>

</style>

