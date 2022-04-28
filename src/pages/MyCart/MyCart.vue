<template>
  <div class="cart">
      <shop-header title="购物车" :isShow="true"></shop-header>
      <div class="content">     
        <Blank v-if="!store.state.cartlist.length"></Blank>
        <CartDetail v-else></CartDetail>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import ShopHeader from '../../components/ShopHeader.vue'
import Blank from '../../components/Blank.vue'
import CartDetail from './CartDetail.vue'
import {useStore} from 'vuex'

export default {
    name: 'MyCart',
    components: {
        Footer,
        ShopHeader,
        Blank,
        CartDetail
    },
    setup(){
        const store = useStore()

        return {
            store
        }
    }
}
</script>

<style lang="less" scoped>
.cart{
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: flex-end;
    .content{
        flex: 1;     
    }
}
</style>