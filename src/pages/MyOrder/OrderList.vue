<template>
  <shop-header title="生成订单"></shop-header>
  <div class="content">
      <van-contact-card type="edit" :tel="address.tel" :name="address.name" @click="onEdit" />
      <div class="goods">
          <div v-for="(item,index) in store.state.orderlist" :key="index">
              <van-card
                :num="item.num"
                :price="item.price"
                :title="item.title"
                :thumb="require(`../../../public/img/${item.title}.png`)"
                />
          </div>
      </div>
      <div class="buttom">
            <div class="head">
                <span>商品金额</span>
                <span class="price">￥ {{allPrice}}</span>
            </div>
            <van-button block  type="primary" @click="onSubmit">生成订单</van-button>
      </div>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader.vue'
import {reactive,toRefs,computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRouter,useRoute} from 'vue-router'
import {Dialog} from 'vant'

export default {
    name:'MyOrder',
    components:{ShopHeader},
    setup(){
        const store = useStore()
        const router = useRouter()
        const route = useRoute()

        let data = reactive({
            tel:'22223333',
            name:'张三',
            address:{}
        })

        //获取地址信息
        function getAddress(){
            store.state.address.forEach(item=>{
                if(item.isDefault){
                    data.address = item
                    data.tel = item.tel
                    data.name = item.name
                }
            })
        }

        //生成订单
        function onSubmit(){
            if(store.state.orderlist.length){
                Dialog.alert({
                    title: '恭喜',
                    message: '订单完成',
                }).then(() => {
                    store.commit("COMPLETE",store.state.orderlist)
                    let newlist = store.state.cartlist.filter(item=>{
                        return !route.query.list.includes(item.id+'')
                    })
                    store.commit("DELETE",newlist)
                    router.push("./MyOrder")
                    
                });
                
            }
        }

        onMounted(()=>{
            getAddress()
        })

        //编辑地址函数
        function onEdit(){
            router.push("./Address")
        }

        let allPrice = computed(()=>{
            let total = 0
            store.state.orderlist.map(item=>{
                total += item.price*item.num
            })
            return total
        })

        return{
            ...toRefs(data),
            onEdit,
            store,
            allPrice,
            onSubmit,
        }
    }
}
</script>

<style lang="less" scoped>
    .buttom{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 15px;
        background-color: rgba(236, 233, 233, 0.732);
        max-width: 620px;
        left: 50%;
        transform: translateX(-50%);
        .head{
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            span{
                font-weight: 600;
            }
            .price{
                color:red;
                font-size: 15px;
            }
        }
    }
</style>