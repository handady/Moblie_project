<template>
  <shop-header title="登陆"></shop-header>
  <div class="content">
      <div class="img">
          <img src="./login.png" alt="">
      </div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit" style="marginBottom:10px">
            登陆
            </van-button>
            <van-button round block type="primary" @click="toRegister">
            去注册
            </van-button>
        </div>
        </van-form>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader.vue'
import {useRouter} from 'vue-router'
import { reactive, toRefs } from 'vue'
import { Toast } from 'vant'

export default {
    name: 'Login',
    components: {
        ShopHeader,
    },
    setup(){
        const router = useRouter()

        let data = reactive({
            username: '',
            password: '',
        })

        function toRegister(){
            router.push('/register')
        }

        function onSubmit(value){
            if(localStorage.getItem("userInfo")){
                let userInfo = JSON.parse(localStorage.getItem("userInfo"))
                if(userInfo["用户名"] == value["用户名"]){
                    if(userInfo["密码"] == value["密码"]){
                        Toast.success('登陆成功')
                        localStorage.setItem("isLogin", true)
                        router.push('/')
                    }
                    else{
                        Toast.fail('密码错误')
                    }
                }else{
                    Toast.fail('用户名不存在')
                    return
                }
            }else{
                Toast('用户不存在')
                return
            }
        }

        return {
            toRegister,
            ...toRefs(data),
            onSubmit,
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    background-color: rgb(237, 236, 236);
    height: 100%;
    .img{
        display: flex;
        justify-content: center;
        img{
        width:185px;
        height:185px;
        border-radius: 25px;
        margin-top: 20px;
        margin-bottom: 20px;
        }
    }
}

</style>