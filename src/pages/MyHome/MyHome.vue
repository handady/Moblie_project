<template>
  <div class="home">
      <div class="content">
          <div class="title">
              <span class="word">外卖</span>
              <span class="location">
                  <van-icon name="location-o" />
                  天堂666栋
                  <van-icon name="arrow" />
              </span>
          </div>
          <div class="main">
              <div class="search">
                  <input type="text">
                  <button>搜索</button>
              </div>
              <div class="big_classify">
                  <div v-for="(item,index) in big_classify" :key="index">
                      <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#${item.icon}`"></use>
                    </svg>
                        <span>{{item.name}}</span>
                  </div>
              </div>
              <div class="small_classify">
                  <div v-for="(item,index) in small_classify" :key="index">
                      <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#${item.icon}`"></use>
                    </svg>
                    <span>{{item.name}}</span>
                  </div>
              </div>
          </div>
          <div class="tab">
              <van-tabs v-model:active="active">
                <van-tab v-for="(item,index) in content_nav_list" :key="index" :title="item.tab">
                    <Store :data="item.data"></Store>
                </van-tab>
              </van-tabs>
          </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import { reactive,toRefs } from '@vue/reactivity'
import Footer from '../../components/Footer.vue'
import Store from './Store.vue'

export default {
    name: 'MyHome',
    components: {
        Footer,
        Store,
    },
    setup() {
        let data = reactive({
        big_classify: [
            { name: "草莓", icon: "icon-caomei" },
            { name: "凤梨", icon: "icon-fengli" },
            { name: "火龙果", icon: "icon-huolongguo" },
            { name: "芒果", icon: "icon-mangguo" },
            { name: "橘子", icon: "icon-juzi" },
        ],
        small_classify: [
            { name: "汉堡", icon: "icon-Food-Icons-" },
            { name: "鸡腿", icon: "icon-Food-Icons-1" },
            { name: "蓝莓", icon: "icon-lanmei" },
            { name: "青提", icon: "icon-qingti" },
            { name: "葡萄", icon: "icon-putao" },
            { name: "苹果", icon: "icon-pingguo" },
            { name: "木瓜", icon: "icon-mugua" },
            { name: "桃子", icon: "icon-taozi" },
            { name: "樱桃", icon: "icon-yingtao" },
            { name: "全部分类", icon: "icon-quanbufenlei" },
        ],
        content_nav_list: [
            {
            tab: "天天神券",
            data: [
                {
                    
                pic: "../../../public/img/22.png",
                title: "22",
                sales: "2233",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                {
                title: "33",
                sales: "2233",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                {
                title: "22",
                sales: "2233",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                {
                title: "22",
                sales: "2233",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
            ],
            },
            {
            tab: "减配送费",
            data: [
                {
                title: "22",
                sales: "2233",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
            ],
            },
            {
            tab: "点评高分",
            data: [
                {
                title: "22",
                sales: "2233",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                {
                title: "22",
                sales: "2233",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
            ],
            },
            {
            tab: "会员满减",
            data: [
                {                pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftvax3.sinaimg.cn%2Fcrop.0.0.400.400.180%2F006f1wigly8fspn2n6hcrj30b40b4jsw.jpg%3FKID%3Dimgbed%2Ctva%26Expires%3D1645083791%26ssig%3DH%252FhU4kAZy%252F&refer=http%3A%2F%2Ftvax3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653468438&t=404e9a65765794dd4b89bea2ce3ce686",
                title: "22",
                sales: "2233",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
                {
                title: "33",
                sales: "2233",
                price: "20",
                label: ["门店上新", "很下饭"],
                },
            ],
            },
        ],
    })
        return {
            ...toRefs(data),
        }
    }
}
</script>

<style lang="less" scoped>
.home{
    display: flex;
    flex-flow: column;
    height: 100%;
    .content{
        flex: 1;  
        overflow-y: auto;
        .title{
            display:flex;
            height: 60px;
            justify-content: space-between;
            background: linear-gradient(to bottom, orange, #fff);
            font-weight: 600;
            padding: 20px 20px 50px 20px;
            .word{
                font-size: 18px;
                line-height: 18px;
            }
        }  
        .main{
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            background-color: rgb(255, 255, 255);
            margin-top: -20px;
            .search{
                display: flex;
                position: relative;
                padding: 10px 20px 0px 20px;
                button{
                    position: absolute;
                    width: 50px;
                    height: 32px;
                    border-radius: 15px;
                    line-height: 17px;
                    text-align: center;
                    background-color: orange;
                    right: 20px;
                    font-weight: 600;
                    border:1px transparent
                }
                input{
                    width: 100%;
                    height: 30px;
                    border-radius: 15px;
                    border:1px solid orange;
                }
            }
            .big_classify{
                display: flex;
                margin-top: 20px;
                div{
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-weight: 600;
                    .icon{
                    width: 40px;
                    height: 40px;
                }
                }
            }
            .small_classify{
                display: flex;
                flex-wrap: wrap;
                margin-top: 20px;
                div{
                    display: flex;
                    width: 20%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-weight: 600;
                    .icon{
                    width: 25px;
                    height: 25px;
                    
                    }
                    margin-bottom: 10px;
                }
            }
        } 
        .tab{
            margin: 10px 0 0;
           
        }
    }
}

</style>