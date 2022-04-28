<template>
  <van-checkbox-group v-model="result" ref="checkboxGroup"  @change="checkChange">
    <div v-for="(item,index) in store.state.cartlist" :key="index" class="food">
        <van-checkbox :name="item.id"></van-checkbox>
        <food-add :subItem="item" class="foodadd" @onChange="onChange"></food-add>
    </div>
  </van-checkbox-group>
  <van-submit-bar :price="total_price" @submit="Pay" button-text="提交订单" class="submit_bar" v-if="isEdit">
    <van-checkbox v-model="checked" @click="changeAll">全选</van-checkbox>
  </van-submit-bar>
  <div class="submit_delete" v-else>
      <van-checkbox v-model="checked" @click="changeAll">全选</van-checkbox>
      <div class="delete" @click="delete_item">删除</div>
  </div>
</template>

<script>
import { computed, onMounted, reactive,toRefs } from 'vue'
import {useStore} from 'vuex'
import FoodAdd from '../../components/FoodAdd.vue'
import { Toast } from 'vant'
import emitter from "../../commom/js/emitter.js";
import {useRouter} from 'vue-router'

export default {
    components: { FoodAdd },
    name:'CartDetail',
    setup(){
        const store = useStore()
        const router = useRouter()

        let data = reactive({
            result:[],
            checked:true,
            isEdit:true,
        })
        function update(type){
            return store.state.cartlist.filter(item=>{
                return type===2?data.result.includes(item.id)
                :!data.result.includes(item.id)
            })
        }
        //提交订单
        function Pay(){
            if(data.result.length !== 0){
                store.commit("PAY",update(2))
                router.push({
                    path:"/OrderList",
                    query:{
                        list:data.result
                    }
                })
            }else{
                Toast.fail('请选择商品')
            }
        }
        //同步商品个数
        function onChange(value,detail){
            store.state.cartlist.map(item=>{
                if(item.id == detail.name){
                    item.num = value
                }
            })
        }

        //初始化数据
        function init(){
            data.result = store.state.cartlist.map(item=>{
                return item.id
            })
        }

        onMounted(()=>{
            init()
        })

        //改变复选框
        function checkChange(val){
            if(val.length !== store.state.cartlist.length){
                data.checked = false
            }else{
                data.checked = true
            }
        }
        //改变全选
        function changeAll(){
            if(data.result.length !== store.state.cartlist.length){
                init()
            }else{
                data.result = []
            }
        }

        //计算总价
        const total_price = computed(()=>{
            let total = 0
            let list1 = store.state.cartlist.filter(item=>{
                return data.result.includes(item.id)
            })
            for(let i of list1){
                total += i.num * i.price
            }
            return total*100
        })
        
        //改变edit状态
        emitter.on('editList',()=>{
            data.isEdit = !data.isEdit
        })

        //删除物品
        function delete_item(){
            if(data.result.length !== 0){
                store.commit("DELETE",update(1))
                data.result = []
                if(store.state.cartlist.length === 0){
                    data.isEdit = false
                    store.commit("CHANGECOMPLETE",!store.state.isComplete)
                }
            }else{
                Toast.fail('请选择商品')
            }
        }
        
        return {
            store,
            ...toRefs(data),
            checkChange,
            changeAll,
            onChange,
            total_price,
            Pay,
            delete_item
        }
    }
}
</script>

<style lang="less" scoped>
    .food{
        margin: 10px 10px 0 10px;
        padding: 0 10px 0 10px;
        display: flex;
        justify-content: flex-start;
        .foodadd{
            flex:1
        }
    }
    .submit_bar{
        position: absolute;
        bottom:50px;
    }
    .submit_delete{
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom:50px;
        width: 100%;
        padding: 10px 16px 10px 16px;
        .delete{
            background-color: red;
            width: 70px;
            height: 30px;
            border-radius: 20px;
            color: white;
            font-weight: 600;
            text-align: center;
            line-height: 30px;
        }
    }
</style>