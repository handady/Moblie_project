<template>
  <shop-header title="账号管理"></shop-header>
  <div class="content">
    <div class="text">
      <van-cell-group inset>
      <van-field v-model="username" label="昵称" placeholder="请输入用户名"/>
      <van-field v-model="password" label="密码" placeholder="请输入密码"/>
    </van-cell-group>
    <div class="btn">
      <van-button type="primary" block class="heihei" @click="onSave">保存</van-button>
      <van-button type="primary" block class="heihei" @click="logout">退出登陆</van-button>
    </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import ShopHeader from '../../components/ShopHeader.vue'
import { useRouter } from 'vue-router'
import  { Toast } from 'vant'

export default {
    name:"manage",
    components:{
        ShopHeader
    },
    setup(){
      const router = useRouter()

      let data = reactive({
        username: '',
        password: '',
      })

      function onSave(){
        let userInfo = localStorage.getItem('userInfo')
        userInfo = JSON.parse(userInfo)
        if(data.username && data.password){
          userInfo["用户名"] = data.username
          userInfo["密码"] = data.password
          localStorage.setItem('userInfo',JSON.stringify(userInfo))
          Toast.success('保存成功')
          router.push('/Mine')
        }else{
          Toast.fail('保存失败')
        }
      }

      function logout(){
        localStorage.removeItem('isLogin')
        router.push('/login')
      }

      return{
        ...toRefs(data),
        onSave,
        logout
      }
    }
}
</script>

<style lang="less" scoped>
  .content{
    height: 100%;
    background-color: rgb(237, 237, 237);
    .text{
      padding-top: 20px;
    }
    .btn{
      padding: 30px;
      .heihei{
        margin-bottom: 20px;
        border-radius: 20px;
      }
    }
  }
</style>