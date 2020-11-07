<style lang="scss" scoped>
    .header-abs {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        line-height:40px;
        text-align:center;
        border-radius:20px;
        background:rgba(0,0,0,.8);
        .header-abs-back{
            color: #ffffff;
            font-size: 20px;;
        }
            
    }
       
    .header-fixed{
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center ;
        height: 50px;
        color: #ffffff;
        background: #00bcd4;
        position: fixed;
        top: 0  ;                         
        left: 0;
        right: 0;
        .header-fixed-box{
            display: flex;
            align-items: center;
            justify-content: center;
            .header-fixed-back{
                position: absolute; 
                left: 15px;
                font-size: 20px;
            }
                
        }
            
    }
       
            
</style>

       
                    


<template>
    <div>
        <router-link 
            tag="div" 
            to="/" 
            class="header-abs"
            v-show="showAbs" 
        >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed"  v-show="!showAbs" :style="opacityStyle">
            <router-link 
                tag="div" 
                to="/" 
                class="header-fixed-box"
            >
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            showAbs:true,
            opacityStyle:{
                opacity:1
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
        handleScroll(){
            console.log('scroll',scroll)
            const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if(top>60){
                let opacity = top/140
                opacity = opacity>1?1:opacity
                this.opacityStyle = {
                    opacity:opacity
                }
                this.showAbs = false
            }else{
               this.showAbs = true
            }
        }
        // activated(){//全局事件    <keep-alive exclude="Detail">//exclude="Detail" DEtail页面不缓存了 所以不归这个activated这个生命周期管了
        //     window.addEventListener('scroll',this.handleScroll)
        // },
        // deactivated(){//对全家事件的解绑，不解绑会影响到其他页面
        //     window.removeEventListener('scroll',this.handleScroll)
        // }
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll)
    }

    
}
</script>

