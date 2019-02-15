<template>
  <div class="goodItem">
     <div class="flex c-border-b ptb13 plr15 bgc-fff" @click="divClick">
        <div class="f_s_0" style="width: 80px;">
          <img src="../../../assets/logo.png" width="70" height="70"/>						
        </div>
        <div  class="f_g_1" style="overflow: hidden;">
          <div class="c-f16 c-333 ellipsis" @click.stop="titleClick">{{gooditem.title}}</div>
          <div class="c-333 mt7 c-f14 clearfix">
            <span class="c-999">{{gooditem.guige}}</span>
            <span class="c-f14 c-position-r" style="float: right;top: 3px;">×{{gooditem.num}}</span>
          </div>
          <div class="c-333  c-f14  mt7 clearfix">
            <span class="c-FF6D26">{{gooditem.jifen}}积分</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "goodItem",
  components: {
   
  },
  props:["gooditem"],
  data() {
    return {
      
    }
  },
  created() {
  },
  methods:{
    titleClick(){   //点击商品名称事件
      this.$emit("titleClick",this.gooditem)
    },
    divClick(){   //点击组件事件
      this.$emit("divClick",this.gooditem)
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
.goodItem {
}
</style>
