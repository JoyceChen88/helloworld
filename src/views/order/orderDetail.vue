<template>
  <div class="orderDetail">
      <div class="statusDescription w3-row">
        <div class="w3-col mt10" style="width:80px;float:right;">
          <img :src="statusDescription[tabList[Data.status]].image" width="75" height="60"/>
        </div>
        <div class="w3-rest" style="display: table-cell;vertical-align: middle;height: 80px;">
          <div class="c-f17" style="line-height: 30px;">{{statusDescription[tabList[Data.status]].Txt_1}}</div>
          <div class="c-f14">
            <span v-if="statusDescription[tabList[Data.status]].Txt_2">{{statusDescription[tabList[Data.status]].Txt_2}}</span>
            <span v-if="Data.status==1||Data.status==3" class="plr5">{{Data.time}}</span>
            <span v-if="statusDescription[tabList[Data.status]].Txt_3">{{statusDescription[tabList[Data.status]].Txt_3}}</span>
          </div>
        </div>
      </div>
      <div class="distributionDetail bgc-fff">
        <div class="flex c-border-tb ptb12 plr15">          
          <div class="f_s_0 c-f16" style="width:100px;">配送方式</div>
          <div class="f_g_1 c-t-right">
            <span class="c-f16">{{distributionData[Data.type]}}</span>
            <span  class="c-f16" v-if="Data.type==1">{{Data.kuaidimoney}}</span>
          </div>  
        </div> 
        <div v-if="Data.type==1">
          <van-cell :title="Data.clientName+','+Data.clientMobile" :label="Data.clientAddr">
            <div slot="icon" class="svg">
               <van-svg-icon icon-class="svg-order-shop" class="pr10 c-333 c-f18"/>
            </div>
          </van-cell>
        </div>
        <div v-else class="c-f16 c-333">
            <div class="ptb12 plr15 c-border-b flex">
              <div class="f_s_0" style="width:105px;">取货人</div><div class="f_g_1">{{Data.clientName}}</div>
            </div>
            <div class="ptb12 plr15 c-border-b flex">
              <div class="f_s_0" style="width:105px;">联系方式</div><div class="f_g_1">{{Data.clientMobile}}</div>
            </div>
        </div>      
      </div>
      <div class="goodDetail mt10 bgc-fff">
        <div>
          <img src="./images/jiankanghaoli_img.png" style="width:100%;"/>
        </div>
        <div class="flex ptb12 plr15 c-border-b">
          <div class="c-f16 c-333 f_g_1 ellipsis">
            <van-svg-icon icon-class="svg-order-shop" class="pr5 c-FF6D26 c-f18"/>
            {{Data.name}}
          </div>
        </div>
        <div v-for="(good,index) in Data.goods.good" :key="index">
           <good-item :gooditem="good" @divClick="divClick"></good-item>
        </div>
      </div>
      <div class="goodDetail mt10 bgc-fff">
        <div class="plr15 pt13 c-border-t flex c-f14 c-999">
          <div class="f_s_0" style="width:105px;">商品总额</div><div class="f_g_1 c-t-right">{{Data.goods.alljifen}}积分</div>
        </div>
        <div class="ptb12 plr15 c-border-b flex c-f14 c-999">
          <div class="f_s_0" style="width:105px;">运费</div><div class="f_g_1 c-t-right">+￥{{Data.type==1?"0.00":Data.kuaidimoney}}</div>
        </div>
        <div class="ptb12 plr15 c-border-b flex c-f14">
          <div class="f_s_0 c-333" style="width:105px;">实付款</div><div class="f_g_1 c-t-right c-FF6D26">{{Data.goods.alljifen}}积分</div>
        </div>
      </div>
      <div class="mt10 bgc-fff ptb12 plr15 c-position-r c-border-b">
        <div>
          <div class="c-999 c-f14">订单号:<span class="pl5" id="orderId">{{Data.orderid}}</span></div>
          <div class="c-999 c-f14 pt12">创建时间:<span class="pl5">{{Data.createtime}}</span></div>
          <div class="c-999 c-f14 pt12">付款时间:<span class="pl5">{{Data.paytime}}</span></div>
          <div class="c-999 c-f14 pt12">发货时间:<span class="pl5">{{Data.sendtime}}</span></div>
          <div class="c-999 c-f14 pt12">兑换说明:<span class="pl5">{{Data.duihuanshuoming}}</span></div>
        </div>
        <div class="c-FF6D26 c-f14 c-position-a" style="right:15px;top: 40%;">
           <span  id="copyBtn" data-clipboard-action="copy" data-clipboard-target="#orderId" @click="copyPolicyNo">复制</span>
        </div>        
      </div>
      <div class="p15 bgc-fff c-t-right"> <!-- 这个判断都是随便写的 -->
        <van-button round type="default" class="btn-3080 mr10" v-if="Data.status==1">取消订单</van-button>
        <van-button round type="primary" class="bgc-FF6D26 btn-3080"  v-if="Data.status==1">继续支付</van-button>
        <van-button round type="default" class="btn-3080"  v-if="Data.status==2||Data.status==4">申请售后</van-button>
        <van-button round type="primary" class="bgc-FF6D26 btn-3080"  v-if="Data.status==3">确认收货</van-button>
        <van-button round type="default" class="btn-3080"  v-if="Data.status==4">取货码</van-button>
        <van-button round type="default" class="btn-3080 ml10"  v-if="Data.status==4||Data.status==5">删除订单</van-button>
        <van-button round type="default" class="btn-3080"  v-if="Data.status==6">售后详情</van-button>
      </div>
  </div>
</template>

<script>
import goodItem from "./component/goodItem.vue"
import Clipboard from 'clipboard'

export default {
  name: "orderDetail",
  components: {
   goodItem
  },
  data() {
    return {
      Data:{ name:"厦门市卫计委",orderid:"22777623569898323654",mobile:"13969696969",status:3,type:1,time:"13:23:36",kuaidimoney:"8.00",clientName:"张大大",clientMobile:"13966969696",clientAddr:"福建省厦门市湖里区金市湖里区金市湖里区金市湖里区金市湖里区金",
          goods:{good:[{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"300",num:2},{image:"../images/shuruchaxun_icon.png",title:"多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆多功能洗脚盆",guige:"AS-838电脑版,3L(大容量)",jifen:"200",num:1}],allnum:3,alljifen:"800"},
          createtime:"2018-11-27 20:31:47","paytime":"2018-11-27 20:31:47","sendtime":"2018-11-27 20:31:47",duihuanshuoming:"由家庭医生进行积分兑换"
      },
      tabList:["","weifukuan","daifahuo","daishouhuo","jiaoyiwancheng","guanbidingdan"],
      distributionData:["到店自取","快递￥"],
      statusDescription:{
          weifukuan:{image:require("./images/daifukuan_img.png"),Txt_1:"商品未付款",Txt_2:"还剩",Txt_3:"系统将取消订单"},
          daifahuo:{image:require("./images/daifahuo_img.png"),Txt_1:"商品待发货",Txt_2:"您的订单已生成，包裹将在3个工作日发出，请及时查收！",Txt_3:""},
          daishouhuo:{image:require("./images/daishouhuo_img.png"),Txt_1:"卖家已发货",Txt_2:"还剩",Txt_3:"自动确认"},
          jiaoyiwancheng:{image:require("./images/jiaoyichenggong_img.png"),Txt_1:"交易成功",Txt_2:"",Txt_3:""},
          guanbidingdan:{image:require("./images/jiaoyichenggong_img.png"),Txt_1:"订单已关闭",Txt_2:"退款成功",Txt_3:""},
      }
    }
  },
  created() {
  },
  methods:{
    divClick(data){   //点击商品组件
      this.$toast("点击商品组件")
      this.goPage("/order/orderDetail")
    },
    copyPolicyNo(){
      var clipboard = new Clipboard('#copyBtn');
      clipboard.on('success', (e)=>{
        console.log(e)
        this.$toast("复制成功")
        e.clearSelection();
      });
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
.orderDetail {
  .statusDescription{
    background: -webkit-gradient(linear, 0 0, 90% 100%, from(#FF9526), to(#FF6D26));
    padding: 0px 14px 0px 15px;
    color:#ffffff;
    height :80px;
  }
  .distributionDetail{
    .van-cell{
      display:table;
      font-size :16px;
      color:#333;
    }
    .van-cell__label{
      font-size :14px;
      color:#999;
    }
    .svg, .van-cell__right-icon{
      display:table-cell;
      vertical-align :middle;
      width :20px;
    }
  }
  .goodDetail{

  }
}
</style>
