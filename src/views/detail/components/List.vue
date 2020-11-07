<style lang="scss" scoped>
    .item-title-icon{
        position: relative;
        left: 3px;
        top: 4px;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -22.5px no-repeat;
        margin-right: 5px;
        background-size: 20px 150px;
    }
        
    .item-title{
         line-height: 40px;
        font-size: 16px;
        padding: 0 10px;
        border-bottom: 1px solid #cccccc;
    }
       
    .item-children{
         padding: 0 10px;
    }
</style>
    
<template>
    <div>
        <div 
            class="item"
            v-for="(item,index) of list"
            :key="index"
        >
            <div class="item-title">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>

            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
        
    </div>   
</template>

<script>
export default {
    name:'DetailList',
    //组件中name属性的作用：递归组件时使用;keepalive 取消缓存在exclide='组件name'里使用 Vue devtool调式工具中显示项目结构的名字
    props:{
        list:Array
    }
}
</script>

