<template>
  <div class="box">
      <img :src="require(`../../public/img/${subItem.title}.png`)" alt="">
      <div class="text">
          <div class="title"><span>{{subItem.title}}娘</span><span>￥ {{subItem.price}}</span></div>
          <div class="btn">
              <van-icon name="add-o" color="red" v-if="subItem.add && showAdd" @click="addClick(subItem.id)"/>
            <van-stepper v-model="subItem.num" v-else :min="1" :name="subItem.id" @change="onChange"/>
          </div>
      </div>
  </div>
</template>

<script>
//import {reactive,toRefs} from "vue"

export default {
    name:"FoodAdd",
    props:['subItem','showAdd','addClick','onChange'],
    setup(props){
        console.log(props.subItem);
    }
}
</script>

<style lang="less" scoped>
    .box{
        margin-bottom:15px;
        display: flex;
        justify-content: space-between;
        img{
            width:80px;
            height:80px;
        }
        .text{
            flex: 1;
            margin: 20px 20px 0 10px;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title{
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 14px;
                }
            }
            .btn{
                display: flex;
                justify-content: flex-end;
                font-size: 18px;
            }
        }
    }
</style>