<template>
  <div class="order">
    <ShopHeader title="订单"></ShopHeader>
      <div class="content">
          <van-tabs v-model:active="active">
            <van-tab :title="item" v-for="(item,index) in tabs" :key="index">
                <div class="main" v-if="item==='全部'&& store.state.completedlist.length">
                    <div v-for="(i,index2) in store.state.completedlist" :key="index2">
                    <van-card
                    :num="i.num"
                    :price="i.price"
                    :title="i.title"
                    :thumb="require(`../../../public/img/${i.title}.png`)"
                    />
                </div>   </div>
                <Blank v-else></Blank>            
            </van-tab>
        </van-tabs>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import ShopHeader from '../../components/ShopHeader.vue'
import Blank from '../../components/Blank.vue'
import {reactive,toRefs} from 'vue'
import {useStore} from 'vuex'

export default {
    name: 'MyOrder',
    components: {
        Footer,
        ShopHeader,
        Blank
    },
    setup(){
        const store = useStore()

        let data = reactive({
            tabs:["全部","交易完成","待付款","待发货","已发货"],
        })

        return {
            ...toRefs(data),
            store,
        }
    }
}
</script>

<style lang="less" scoped>
.order{
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: flex-end;
    .content{
        flex: 1;        
    }
}
</style>