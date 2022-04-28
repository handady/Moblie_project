<template>
  <shop-header  title="地址管理"></shop-header>
  <div class="content">
      <van-address-list
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        />
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader.vue'
import {reactive,toRefs, onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
    name: 'Address',
    components: {
        ShopHeader
    },
    setup() {
    const store = useStore();
    const router = useRouter();
    let data = reactive({
      list: [],
    });

    // 初始化数据
    const init = () => {
      data.list = store.state.address.map((item) => {
        return {
          id: item.id,
          name: item.name,
          tel: item.tel,
          address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
          isDefault: item.isDefault,
        };
      });
    };
    onMounted(() => {
      init();
    });

    // 新增地址的按钮
    const onAdd = () => {
      router.push({
          path:"./addressedit",
            query:{
                type:'add'
            }
      });
    };

    // 编辑地址的按钮
    const onEdit = (item) => {
      router.push({
          path:"./addressedit",
            query:{
                type:'edit',
                item:item.id,
            }
      });
    };

    return {
      ...toRefs(data),
      onAdd,
      onEdit,
    };
  },
}
</script>

<style lang="less" scoped>
    /deep/ .van-radio__icon{
        display: none;
    }
</style>