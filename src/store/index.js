import { createStore } from 'vuex'

export default createStore({
  state: {
    cartlist:[],
    orderlist:[],
    completedlist:[],
    isComplete:true,
    address:[
      {
        id: 1001,
        name: '22',
        tel: '2222222222',
        province: '广东省',
        city: '广州市',
        county: '天河区',
        addressDetail: ' 哈哈',
        isDefault: true,
        areaCode: '110101',
      },
      {
        id: 1002,
        name: '33',
        tel: '3333333333',
        province: '广东省',
        city: '广州市',
        county: '天河区',
        addressDetail: ' 嘿嘿',
        isDefault: false,
        areaCode: '110101',
      },
    ],
  },
  mutations: {
    ADDCART(state,value){
      state.cartlist=value
    },
    PAY(state,value){
      state.orderlist=value
    },
    DELETE(state,value){
      state.cartlist = value
    },
    CHANGECOMPLETE(state,value){
      state.isComplete = value
    },
    COMPLETE(state,value){
      state.completedlist = state.completedlist.concat(value)
    },
    ADDADDRESS(state,value){
      if(value.isDefault){
        state.address.forEach(item=>{
          item.isDefault = false
        })
      }
      state.address.push(value)
    },
    EDITADDRESS(state,value){
      if(value.isDefault){
        state.address.forEach(item=>{
          if(item.id != value.id){
            item.isDefault = false
          }
        })
      }
      state.address = state.address.map(item=>{
        return item.id === value.id ? value : item
      })
    },
    DELETEADDRESS(state,value){
      state.address = state.address.filter(item=>{
        return item.addressDetail !== value.addressDetail
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
