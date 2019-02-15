<template>
  <div class="myOrderTabItem">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">    
      <van-list  v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad">
        <van-cell v-for="(item,index) in ListData" :key="index"  class="bgc-fff mt10 c-border-b p0">
          <div class="flex ptb12 plr15 c-border-b">
            <div class="c-f16 c-333 f_g_1 ellipsis">
              <van-svg-icon icon-class="svg-order-shop" class="pr5 c-FF6D26 c-f18"/>
              {{item.name}}
            </div>
            <div v-if="item.time" class="c-f14 c-FF6D26 f_s_0  c-t-right" style="width:125px;">剩余时间 {{item.time}}</div>
            <div class="c-f14 c-333 f_s_0 c-t-right" style="width:60px;">{{tabList[item.status].name}}</div>
          </div>
          <div  v-for="(good,index) in item.goods.good" :key="index">
            <good-item :gooditem="good" @titleClick="titleClick"  @divClick="divClick"></good-item>
          </div> 
          <div class="ptb12 plr15 flex">
            <div class="f_g_1" style="line-height:30px;">
              <span class="c-f12 c-333">共{{item.goods.allnum}}件商品 合计:</span><span class="c-FF6D26 c-f14">600积分</span>
            </div>
            <div class="f_s_0 c-t-right" style="width:170px"> <!-- 这个判断都是随便写的 -->
              <van-button round type="default" class="btn-3080 mr10" v-if="item.status==1">取消订单</van-button>
              <van-button round type="primary" class="bgc-FF6D26 btn-3080"  v-if="item.status==1">继续支付</van-button>
              <van-button round type="default" class="btn-3080"  v-if="item.status==2||item.status==4">申请售后</van-button>
              <van-button round type="primary" class="bgc-FF6D26 btn-3080"  v-if="item.status==3">确认收货</van-button>
              <van-button round type="default" class="btn-3080 ml10"  v-if="item.status==4||item.status==5">删除订单</van-button>
              <van-button round type="default" class="btn-3080"  v-if="item.status==6">售后详情</van-button>
            </div>
          </div> 
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import goodItem from "./goodItem.vue"

export default {
  name: "myOrderTabItem",
  components: {
    goodItem
  },
  data() {
    return {
      tabList:[{name:"全部",info:5},{name:"待付款",info:5},{name:"待发货",info:15},{name:"待收货",info:"99+"},{name:"交易成功",info:5},{name:"订单关闭",info:5},{name:"售后",info:5}],
      ListData:[
        { name:"厦门市卫计委",orderid:"22777623569898323654",mobile:"13969696969",status:1,type:1,time:"13:23:36",
				goods:{good:[{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"300",num:2},{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"200",num:1}],allnum:3,alljifen:"800"}
		},{ name:"厦门市卫计委",orderid:"22777623569898323654",mobile:"13969696969",status:2,type:1, 
				goods:{good:[{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"300",num:2}],allnum:2,alljifen:"600"}
		},{ name:"厦门市卫计委",orderid:"22777623569898323654",mobile:"13969696969",status:3,type:1, 
				goods:{good:[{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"300",num:2}],allnum:2,alljifen:"600"}
		},{ name:"厦门市卫计委",orderid:"22777623569898323654",mobile:"13969696969",status:4,type:1, 
				goods:{good:[{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"300",num:2}],allnum:2,alljifen:"600"}
		},{ name:"厦门市卫计委",orderid:"22777623569898323654",mobile:"13969696969",status:5,type:1, 
				goods:{good:[{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"300",num:2}],allnum:2,alljifen:"600"}
		},{ name:"厦门市卫计委",orderid:"22777623569898323654",mobile:"13969696969",status:6,type:1, 
				goods:{good:[{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"300",num:2}],allnum:2,alljifen:"600"}
		},{ name:"厦门市卫计委",orderid:"22777623569898323654",mobile:"13969696969",status:1,type:1, 
				goods:{good:[{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"300",num:2}],allnum:2,alljifen:"600"}
		},
      ],
      finished:true,  
      loading: false,
      isLoading: false, //下拉刷新
    }
  },
  created() {
  },
  methods:{
    onRefresh(){   //下拉刷新
      this.$emit("refreshTab")
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    onLoad(){    //上拉加载
         // 异步更新数据
      setTimeout(() => {       
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        // if (this.list.length >= 40) {
        //   this.finished = true;
        // }
      }, 500);
    },
    getList(){
      
    },
    countdown(index){    //待付款倒计时
        //获取现在的时间
      var time_now=new Date();
      //时间设置  2017,9,1,0,0,0设置几月就是几月   2017-9-1 0:0:0 这种设置方式少一个月 付款截止时间
      var time_go=new Date(2018,8,10,0,0,0);
      //计算中间的时间差
      /*getTime() 获取的是当前时间到1970年之间的总时间*/
      var time=parseFloat((time_go.getTime()-time_now.getTime())/1000);
       //开始换算月 天 时 分 秒
      var mon=parseInt(time/(3600*24*30))
      var day=parseInt(time/(3600*24)%30)
      var hour=parseInt(time/3600%24)
      var min=parseInt(time/60%60)
      var sec=parseInt(time%60);  
      this.ListData[index].time = hour+":"+ min + ":" + sec
      setTimeout(()=>{
        this.countdown(index)
      },1000);
    },
    titleClick(data){   //点击商品名称
      this.$toast("点击商品名称")
    },
    divClick(data){   //点击商品组件
      this.$toast("点击商品组件")
      this.goPage("/order/orderDetail")
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
.myOrderTabItem {
}
</style>
