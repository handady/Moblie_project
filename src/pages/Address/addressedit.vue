<template>
  <shop-header :title="title"></shop-header>
  <div class="content">
      <van-address-edit
        :area-list="areaList"
        :address-info="addressInfo"
        show-delete
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        />
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader.vue'
import {computed, onMounted, reactive,toRefs} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {Toast} from 'vant'

export default {
    name:"addressedit",
    components:{ShopHeader},
    setup() {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();
    let data = reactive({
      areaList: {
        province_list: {
          110000: "广东省",
          120000: "浙江省",
        },
        city_list: {
          110100: "广州市",
          110200: "深圳市",
          120100: "杭州市",
          120200: "宁波市",
        },
        county_list: {
          110101: "天河区",
          110102: "海珠区",
          120102: "上城区",
          130102: "下城区",
        },
      },
      addressInfo: {},

    });

    //初始化数据
    function init(){
        store.state.address.forEach((item)=>{
            if(item.id == route.query.item){
                data.addressInfo = item;
            }
        })
    }

    onMounted(() => {
        init();
    });

    //header的title
    let title = computed(()=>{
        if(route.query.type == "add"){
            return "新增地址"
        }else{
            return "编辑地址"
        }
    })

    //保存的按钮
    const onSave = (value) => {
        if(route.query.type == "add"){
            store.commit("ADDADDRESS",value)
            Toast.success("添加成功")
            setTimeout(()=>{
                router.back()
            },1000)
        }else{
            store.commit("EDITADDRESS",value)
            Toast.success("修改成功")
            setTimeout(()=>{
                router.back()
            },1000)
        }
    };

    //删除的按钮
    const onDelete = (value) => {
        store.commit("DELETEADDRESS",value)
        Toast.success("删除成功")
        setTimeout(()=>{
            router.back()
        },1000)
    };

    return {
      ...toRefs(data),
      onSave,
      onDelete,
        title,
    };
  },
}
</script>

<style>

</style>