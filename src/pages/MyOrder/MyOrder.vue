<template>
  <div class="order">
      <div class="content">订单</div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
export default {
    name: 'MyOrder',
    components: {
        Footer,
    },
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