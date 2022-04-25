<template>
  <div class="footer">
      <ul>
            <li>
                <router-link to="/" active-class="active"><van-icon name="wap-home-o" size="30"/><div>首页</div></router-link>
            </li>          
            <li>
                <router-link to="/MyCart" active-class="active"><van-icon name="shopping-cart-o" size="30"/><div>购物车</div></router-link>
            </li>
            <li>
                <router-link to="/MyOrder" active-class="active"><van-icon name="notes-o" size="30"/><div>订单</div></router-link>
            </li>
            <li>
                <router-link to="/Mine" active-class="active"><van-icon name="user-circle-o" size="30"/><div>我的</div></router-link>
            </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .footer{
        ul{
            display: flex;
            li{
                flex:1;
                justify-content: center;
                align-items: center;
                i{
                    display: block;
                    text-align: center;
                }
                div{
                    text-align:center;
                }
            }
        }
    }
    .active{
        color: yellow;
    }
</style>