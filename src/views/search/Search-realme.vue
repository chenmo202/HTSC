<style lang="scss" scoped>
.search-warpper{
    width: 100vw;
    height: 100vh;
    .search-bar-warpper{
        background: #fff;
        display: -webkit-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 46px;
        border-bottom:0.5Px solid #eee;
        .back-icon{
            width: 50px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .back-icon-img{
                width: 25px;
                height: 25px;
            }
        }
        .search-from{
            display: flex;
            flex: 1;
            align-items: center;
            flex-direction: row;
            // justify-content: space-between;
            height: 100%;
            .search-panel{
                // flex-direction: row;默认值
                // justify-content: flex-start;默认值
                width: calc(100% - 65px);
                height: 33px;
                background: #f7f8fa;
                border-radius: 4.5px;
                opacity: .9;
                display: flex;
                align-items: center;
                .search-icon-box{
                    width: 31px;
                    line-height: 33px;
                    text-align: center;
                    color: #b2b2b2;
                    font-weight: 600;
                }
                .search-input-box{
                    // position: relative;
                    width: calc(100% - 35px);
                    color: #b2b2b2;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 19.5px;
                    .search-input{
                        width: 100%;
                        color: #333;
                        background: transparent;
                        padding: 0;
                        border: 0;
                    }
                }
            }          
            .search-buttom{
                width:64px;
                height: 100%;
                color: #333;
                font-weight: 500;
                font-size: 15px;
                padding: 0;
                border: 0;
                text-align: center;
                background: transparent;

                
            }
        }
    }
}
    
</style>

<template>
    <div class="search-warpper">
        <div class="search-bar-warpper">
            <div class="back-icon" @click="goback">
                <img class="back-icon-img" :src="imgUrl"/>
            </div>
            <from class="search-from">
                <div class="search-panel">
                    <div class="search-icon-box iconfont">&#xe602;</div>
                    <div class="search-input-box">
                        <input type="text" placeholder="realme 真我Q2" class="search-input" />
                    </div>
                </div>
                <input type="submit" value="搜索" class="search-buttom" />
            </from>
        </div>
    </div>
</template>

<script>
export default {
    name:'Search',
    beforeCreate(){
        document.querySelector('body').setAttribute('style','background:#fff')
    },
    data(){
        return{
           imgUrl:require('../../assets/images/left-icon.png')
        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>