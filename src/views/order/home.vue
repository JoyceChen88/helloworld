<template>
  <div class="home">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" class="c-border-b" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
   
  },
  created() {
  },
  methods:{
    goPage(url) {
      this.$router.push({
        path: url // "/login/register"
      });
    }
  }
};
</script>
