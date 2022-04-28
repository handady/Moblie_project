<template>
    <div class="store">
        <div v-for="(item,index) in data" :key="index" class="store_item" @click="toShop(item.title)">
            <img :src="require(`../../../public/img/${item.title}.png`)" alt="">
            <div class="text">
                <div class="title">{{item.title}}</div>
                <div class="sale">月售{{item.sales}}</div>
                <div class="send">起送 ￥{{item.price}}</div>
                <div class="label">
                    <span v-for="i in item.label" :key="i">{{i}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
    name:'Store',
    props:['data'],
    setup(){
        const router = useRouter()
        function toShop(title){
            router.push({
                path:'/MyStore',
                query:{
                    title:title
                }
            })
        }
        return {
            toShop
        }
    }
}
</script>

<style lang="less" scoped>
    .store{
        margin:20px 20px 0;
        .store_item{
            display: flex;
            justify-content: flex-start;
            margin-bottom: 15px;
            img{
                display: flex;
                width:100px;
                height: 100px;
                border-radius: 10px;
                margin-right: 20px;
            }
            .text{
                display: flex;
                justify-content: space-between;
                flex-flow: column;
                .label{
                    span{
                        padding: 2px;
                        margin-right: 5px;
                        background-color: orange;
                        border-radius: 5px;
                    }
                }
                .title{
                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }
        
    }
</style>