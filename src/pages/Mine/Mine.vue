<template>
  <div class="mine">
      <div class="content">我的</div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
export default {
    name: 'Mine',
    components: {
        Footer,
    },
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
    }
}
</style>