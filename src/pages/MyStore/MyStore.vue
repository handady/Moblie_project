<template>
    <shop-header title="店铺"></shop-header>
    <div class="content">
        <div class="img1"></div>
        <div class="main">
            <div class="head">
                <span>22娘</span>
                <img src="../../../public/img/22.png" alt="">
            </div>
            <van-tabs v-model:active="active" >
                <van-tab :title="item.name" v-for="(item,index) in storeData" :key="index">
                    <store-list :index="index" :foodData="item.data"></store-list>
                </van-tab>
            </van-tabs>
        </div>
        <van-action-bar class="test">
        <van-action-bar-icon icon="chat-o" text="客服" @click="kefu"/>
        <van-action-bar-icon icon="cart-o" text="购物车" @click="goToCart" :badge="store.state.cartlist.length" />
        <van-action-bar-button type="warning" text="加入购物车" @click="addCart('choose')"/>
        <van-action-bar-button type="danger" text="立即购买" @click="buyNow" />
      </van-action-bar>
    </div>
    
</template>

<script>
import {reactive,toRefs} from "vue"
import ShopHeader from '../../components/ShopHeader.vue';
import StoreList from './StoreList.vue';
import { Toast } from 'vant';
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
    name:'MyStore',
    components:{
        ShopHeader,
        StoreList,
    },
    setup() {
      const store = useStore()
      const router = useRouter()

      let data = reactive({
        storeData: [
          {
            name: "点菜",
            data: {
              content: "点菜",
              items: [
                {
                  text: "热销套餐",
                  children: [
                    {
                      pic: "../../../public/img/22.png",
                      title: "22",
                      num: 0,
                      price: 25.0,
                      id: 0,
                      add: true,
                    },
                    {
                      pic: "../../../public/img/33.png",
                      title: "33",
                      num: 0,
                      price: 25.0,
                      id: 1,
                      add: true,
                    },
                  ],
                },
                {
                  text: "超级22娘",
                  children: [
                    {
                      pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                      title: "超级22",
                      num: 0,
                      price: 25.0,
                      id: 2,
                      add: true,
                    },
                  ],
                },
                {
                  text: "超级折扣",
                  children: [
                    {
                      pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                      title: "2233全家桶",
                      num: 0,
                      price: 25.0,
                      id: 3,
                      add: true,
                    },
                  ],
                },
              ],
            },
          },
          { name: "评价", data: { content: "再看也不会有评价的！" } },
          { name: "商家", data: { content: "根本没有商家~" } },
        ],
      });
      
      function kefu() {
        Toast.fail('没钱请客服');
      }

      function addCart(choose) {
        let newlist = []
        data.storeData.forEach(item=>{
          item.data.items?.forEach(items=>{
            items.children.forEach(child=>{
              if(child.num>0){
                newlist.push(child)
              }
            })
          })
        })
        if(newlist.length==0 && choose){
          Toast.fail('请选择商品');
          return
        }

        store.commit('ADDCART',newlist)
      }

      function goToCart(){
        router.push('/MyCart')
      }

      function buyNow(){
        addCart()
        if(store.state.cartlist.length>0){
          router.push('/MyCart')
        }else{
          Toast.fail('没有商品');
          return
        } 
      }

      return {
        ...toRefs(data),
        kefu,
        store,
        addCart,
        goToCart,
        buyNow,
      };
    },
}
</script>

<style lang="less" scoped>
    .content{
        .img1{
            width: 100%;
            height: 200px;
            background-image: url('../../../public/img/22娘.png');
        }
        .main{
            margin-top: -15px;
            background-color: rgb(255, 255, 255);
            border-radius: 20px;
            .head{
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 20px;
                    font-weight: bold;
                    margin:20px 0 0 30px;
                }
                img{
                    width:80px;
                    height:80px;
                    margin-right: 30px;
                    margin-top: -10px;
                    border-radius: 10px;
                }
            }
        }
        .test{
          max-width: 620px;
          margin: 0 auto;
        }
    }
</style>