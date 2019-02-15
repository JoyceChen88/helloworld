/* Layout */
import Layout from "@/views/layout/Layout";

/* Router Modules */

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    cache: false                if true ,the page will be cached(default is false)
    wxSign: true
    jsApiList: []
  }
**/
const constantRouterMap = [
    {
        path: "/svg",
        name: "svg",
        component: () => import("@/views/Svg.vue")
    },
    {
        path: "/",
        redirect: "/order/home"
    },
	{
		path: "/redirect",
		component: Layout,
        hidden: true,
        name: "redirect",
		children: [
			{
				path: "/redirect/:path*",
				component: () => import("@/views/redirect/index")
			}
		]
    },
	{
        path: "/404",
        name: "404",
		component: () => import("@/views/errorPage/404"),
		hidden: true
	},
	{
        path: "/order/home",
        name: "订单",
		component: () => import("@/views/order/home"),
		hidden: true
	},
	{
        path: "/order/myorder",
        name: "我的订单",
		component: () => import("@/views/order/myorder"),
		hidden: true
	},
	{
        path: "/order/orderDetail",
        name: "订单详情",
		component: () => import("@/views/order/orderDetail"),
		hidden: true
	},
	{
        path: "/401",
        name: "401",
		component: () => import("@/views/errorPage/401"),
		hidden: true
	}
];

export default constantRouterMap;
