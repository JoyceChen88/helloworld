<template>
  <div class="myOrder">
    <van-tabs  v-model="active" animated class="theme-FF6D26" sticky @refreshTab="refreshTab">
      <van-tab v-for="(item,index) in tabList" :key="index" :name="'tab_'+index">
        <div slot="title"  class="c-position-r">
          {{item.name}}<span class="c-position-a badge">{{item.info}}</span>
        </div>
        <my-order-tab-item :ref="index+'_Ref'"></my-order-tab-item>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import myOrderTabItem from "./component/myOrderTabItem"

export default {
  name: "myOrder",
  components: {
    myOrderTabItem
  },
  data() {
    return {
      tabList:[{name:"全部",info:5},{name:"待付款",info:5},{name:"待发货",info:15},{name:"待收货",info:"99+"},{name:"已完成",info:5},{name:"已关闭",info:5},{name:"售后",info:5}],      
    }
  },
  created() {
    
  },
  methods:{
    refreshTab(){
      console.log("刷新tab栏数量")
    },
    goPage(url) {
      this.$router.push({
        path: url // "/login/register"
      });
    }
  }
};
</script>
<style  lang="stylus">
.myOrder {
}
</style>
