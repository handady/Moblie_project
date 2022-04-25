<template>
  <div class="cart">
      <div class="content">购物车</div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
export default {
    name: 'MyCart',
    components: {
        Footer,
    },
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