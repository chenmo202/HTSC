<template>
    <div>
        <div class="tab">
            <ul class="tab_button">
                <li 
                    v-for="(item,index) in tabList"    
                    :key="index" 
                    :class="{active:currentClass==index}"   
                    @click="toggleTab(item.tab_con,index)" 
                >
                    {{item.title}}
                </li>
            </ul>
        </div>
        
        <div class="tab_con">
            <keep-alive>   
                <firstTab :is="currentTab"></firstTab>  
            </keep-alive>
        </div>
    
    </div>
    
</template>

<script>
//组件切换
import firstTab from './firstTab'
import secondTab from './secondTab'
import thirdTab from './thirdTab' 
export default {
    name: 'HomeTab',
    props: {},
    data(){
        return{
            currentTab: 'firstTab',  // 默认选中tab
            currentClass: 0,  // 默认选中按钮样式
            tabList:[
	            {
	                title: 'firstTab',  // tab文字
	                tab_con: 'firstTab'  // tab对应内容块
	            },
	            {
	                title: 'secondTab',
	                tab_con: 'secondTab'
	            },
	            {
	                title: 'thirdTab',
	                tab_con: 'thirdTab'
                },
	        ]
        }
    },
    methods: {
	    toggleTab(tab_con,currentClass){
	        this.currentTab = tab_con;  // 选中tab内容块展示
	        this.currentClass = currentClass;  // 选中tab样式
	    }
	},
    components: {
		firstTab,
		secondTab,
		thirdTab
	}
}
</script>

<style lang="scss" scoped>
    .tab_button li{width: 90px; height: 30px;cursor: pointer; display: inline-block; margin-left: 24px;font: bold 14px/30px 'Microsoft Yahei'; color: #333; text-align: center;}
    .tab_button li.active{ border-bottom: 1px solid #f3ae19; color: #f3ae19}  // 选中tab 样式
</style>
    
