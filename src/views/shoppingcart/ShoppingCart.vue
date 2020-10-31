<template>
    <div class="car">
        <div class="header">
            <img src="../../assets/images/left-icon.png" class="head-icon" @click="goback"/>
        </div>
    </div>
</template>

<script>
export default {
    name:'ShoppingCart',
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        .head-icon{
            margin-left: 15px;
            width: 30px;
            height: 30px;
        }
    }
</style>