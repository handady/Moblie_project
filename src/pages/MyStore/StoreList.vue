<template>
    <div class="foodl" v-if="index==0">
        <van-tree-select
        v-model:main-active-index="activeIndex"
        height="55vw"
        :items="items"
        @click-nav="addSubItem"
        >
            <template #content>
                <div v-for="(item,index) in subItems" :key="index">
                    <food-add :subItem="item" :showAdd="true" :addClick="addClick" @onChange="onChange"></food-add>
                </div>
            </template>
        </van-tree-select>
    </div>
    <div v-else>{{foodData.content}}</div>
</template>

<script>
import {reactive,toRefs} from "vue"
import FoodAdd from '../../components/FoodAdd.vue';

export default {
    name:'StoreList',
    components:{
        FoodAdd,
    },
    props:['index','foodData'],
    setup(props) {
        let data=reactive({
            activeIndex:0,
            items:[],
            subItems:[]
        })

        function addSubItem(i){
            data.subItems = props.foodData.items[i].children
        }

        function init(){
            let list1 = []
            props.foodData?.items?.map((item,index)=>{
                list1.push({text:item.text})
                if(data.activeIndex==index){
                    data.subItems = item.children
                }
            })
            data.items = list1
        }
        init()

        function addClick(id){
            data.subItems.forEach(item=>{
                if(item.id==id){
                    item.add = false
                    item.num+=1
                }
            })
        }

        function onChange(value,detail){
            data.subItems.forEach(item=>{
                if(item.id==detail.num){
                    item.num = value
                }
            })
        }

        return {
        ...toRefs(data),
        addSubItem,
        addClick,
        onChange
        };
    },
};
</script>

<style lang="less" scoped>

</style>