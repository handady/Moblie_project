<template>
  <div class="header">
      <van-icon name="arrow-left" @click="goBack"/>
      <span>{{title}}</span>
      <div class="edit" v-if="isShow" @click="editList">
          {{store.state.isComplete? '编辑':'完成'}}
      </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import emitter from "../commom/js/emitter.js";
import {Toast} from 'vant'
import {useStore} from 'vuex'

export default {
    name: 'ShopHeader',
    props:['title','isShow'],
    setup(){
        const router = useRouter()
        const store = useStore()

        function goBack(){
            router.back()
        }

        //点击编辑按钮
        function editList(){
            if(store.state.cartlist.length !== 0){
                emitter.emit('editList',true)
                store.commit("CHANGECOMPLETE",!store.state.isComplete)
            }else{
                Toast.fail('木有商品')
            }
        }

        return {
            goBack,
            editList,
            store,
        }
    }
}
</script>

<style lang="less" scoped>
    .header{
        display: flex;
        height: 35px;
        padding: 10px;
        font-size: 14px;
        align-items: center;
        font-weight: 600;
        span{
            font-size: 14px;
            flex: 1;
            text-align: center;
        }
        .edit{
            font-size: 14px;
            font-weight: 600;
            margin-left: 10px;
        }
    }
</style>