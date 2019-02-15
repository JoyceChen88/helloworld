import store from "@/store";
// import { getRoutes } from "@/api/permission";
import constantRouterMap from "@/router/constantRouterMap";
// import remoteRouterMap2 from "@/router/remoteRouterMap";
// import NProgress from 'nprogress' // progress bar

import { setTitle } from "@/utils/title"

import { isKeepAlive } from "@/utils/cache"

let Message = vant.Toast  

Vue.use(VueRouter);

function GetRequest() {  
    let url = location.search; //获取url中"?"符后的字串
    let theRequest = {};
    let strs = []
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
       strs = str.split("&");
       for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
       }
    }
    return theRequest;
 }

/* Layout */
// import Layout from "@/views/layout/Layout";

export const router = new VueRouter({
    // mode: 'history', // require service support
	scrollBehavior (to, from, savedPosition) {
        if(to.meta.savedPosition) {
            let count = 0
            let timmer = setInterval(() => {
                if(count > 2) {
                    window.scrollTo(0 , to.meta.savedPosition)
                    window.clearInterval(timmer)
                    timmer = null
                    return 
                }

                count++ 

               window.scrollTo(0 , to.meta.savedPosition)
                
            }, 300)
        }
        if (savedPosition) {
            return savedPosition
          } else {
            if (isKeepAlive(from)) {
                from.meta.savedPosition = (document.documentElement|| document.body).scrollTop
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
        
      },
	routes: constantRouterMap
});



router.afterEach((to,from) => {
    // 更新页面标题
    if(to.meta && to.meta.title) {
        setTitle(to.meta.title)
    }
    
})


export const asyncRouterMap = [];
