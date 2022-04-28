<template>
  <div class="mine">
      <shop-header title="我的"></shop-header>
      <div class="content">
          <div class="card">
              <img src="../../../public/img/22.png" alt="">
              <div class="text">
                    <p>昵称：22</p>
                    <p>介绍：看板娘</p>
              </div>
          </div>
          <ul>
              <li @click="goTo(1)">我的订单<van-icon name="arrow" /></li>
              <li @click="goTo(2)">地址管理<van-icon name="arrow" /></li>
              <li @click="goTo(3)">账号管理<van-icon name="arrow" /></li>
          </ul>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import ShopHeader from '../../components/ShopHeader.vue'
import {useRouter} from 'vue-router'

export default {
    name: 'Mine',
    components: {
        Footer,
        ShopHeader,
    },
    setup(){
        const router = useRouter()

        function goTo(index){
            if(index == 1){
                router.push('/MyOrder')
            }
            else if(index == 2){
                router.push('/address')
            }
            else if(index == 3){
                router.push('/manage')
            }
        }

        return {
            goTo
        }
    }
}
</script>

<style lang="less" scoped>
.mine{
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: flex-end;
    .content{
        flex: 1;
        .card{
            background: linear-gradient(to right, #fff200fc, rgba(76, 236, 18, 0.666));
            height: 100px;
            margin: 5px 10px 0 10px;
            border-radius: 10px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img{
                margin-left: 25px;
                margin-right: 25px;
                border-radius: 50%;
                width: 65px;
                height: 65px;
            }
            .text{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                p{
                    font-size: 14px;
                    color: #fff;
                    margin-bottom: 5px;
                    font-weight: 600;
                }
                p:last-child{
                    margin-bottom: 0;
                }
            }
        }   
        ul{
            margin: 15px 10px 0 10px;
            li{
                font-weight: 600;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }     
    }
}
</style>