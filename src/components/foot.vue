<style lang="scss" scoped>
    .foot{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 99;
        .foot_ul{
            background-color: #fff;
            display: flex;
            justify-content: space-evenly;
            .foot_li{
                width: 100%;
                font-size: 12px;
                .foot_i{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap:wrap;
                    flex-direction: column; 
                    margin: 5px 0;
                    .foot_img{
                        width: 24px;
                        height: 24px;
                    }

                } 
            }
        }
    }
</style>

<template>
    <div class="foot">
       <ul class="foot_ul">
           <li class="foot_li"
            @click="tapTaps(item,key)"
            v-for="(item,key) of tabs"
            :key="key"
           >
            <div class="foot_i">
                <img 
                    :src="count === key ? item.activeImg : item.icon"
                    class="foot_img"
                 />
                <span :style="{'color':count === key ? '#f63434' : 'rgba(0, 0, 0, 0.3)'}">{{item.title}}</span>
            </div>
            
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count:0,
            tabs:[
                {
                    title:"首页",
                    icon:require("../assets/images/footImg/home.png"),
                    activeImg:require("../assets/images/footImg/home_active.png"),
                    route:"/Home"
                },
                {
                    title:"分类",
                    icon:require("../assets/images/footImg/classify.png"),
                    activeImg:require("../assets/images/footImg/classify_active.png"),
                    route:"/Classify"
                },
                {
                    title:"购物车",
                    icon:require("../assets/images/footImg/cat.png"),
                    route:"/ShoppingCart"
                },
                {
                    title:"我的",
                    icon:require("../assets/images/footImg/mine.png"),
                    activeImg:require("../assets/images/footImg/mine_active.png"),
                    route:"/Mine"
                }
            ]
        }
    },
    methods:{
        tapTaps(item,key){
            if(key === this.count) return;
            this.count = key;
            this.$emit('taptabs',item)
            // key[2].this.$router({path:route.ShoppingCart})
            // if(this.route == key[2]){
            //     this.$router({path:route.ShoppingCart})
            // }else{
            //     暂无路由
            // }
        }
    }
    
}
</script>

