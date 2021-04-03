(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{226:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("权限控制")]),t._v(" "),s("p",[t._v("权限控制对于一个中后台系统来说不可或缺，那么在 Venus 中是如何进行权限控制的呢？")]),t._v(" "),s("h2",{attrs:{id:"权限路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限路由"}},[t._v("#")]),t._v(" 权限路由")]),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:"/docs/dev/router-and-nav"}},[t._v("路由和菜单")]),t._v("一节中我们提到过，所有需要根据权限生成的路由都应该被定义在 "),s("code",[t._v("@/router/router.js")]),t._v(" 的 "),s("code",[t._v("asyncRoutes")]),t._v(" 数组中，里面的每个路由项都对应着一个权限标识，将这些标识与用户自身的权限标识一一比对，就能得到权限路由了。")]),t._v(" "),s("p",[t._v("具体的实现步骤如下：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("用户登录时得到一个 "),s("code",[t._v("token")]),t._v("，token 存储了登录信息和登录时效，登录成功后用户将跳转到首页")])]),t._v(" "),s("li",[s("p",[t._v("路由跳转时触发 "),s("a",{attrs:{href:"https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("router.beforeEach")]),s("OutboundLink")],1),t._v(" 方法，该方法内首先确认用户是否拥有 token，如果有则通过 "),s("code",[t._v("store.dispatch('getUserInfo')")]),t._v(" 获取用户的信息，否则将重定向回登录页。")])]),t._v(" "),s("li",[s("p",[t._v("在用户信息中提取 "),s("code",[t._v("permissions")]),t._v(" 并传递给 "),s("code",[t._v("store.dispatch('generateRoutes', permissions)")]),t._v("，然后就能得到对应权限的路由")])]),t._v(" "),s("li",[s("p",[t._v("调用 "),s("code",[t._v("router.addRoutes()")]),t._v(" 将过滤好权限的路由动态地添加到路由表中")])]),t._v(" "),s("li",[s("p",[t._v("鉴权结束，开始渲染菜单")])])]),t._v(" "),s("h2",{attrs:{id:"权限指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限指令"}},[t._v("#")]),t._v(" 权限指令")]),t._v(" "),s("p",[t._v("为了更灵活地控制权限，Venus 还封装了一个 vue 指令："),s("code",[t._v("v-auth")]),t._v("，你可以向该指令传递字符串或数组，像这样使用：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-auth")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Admin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-auth")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Admin and Editor"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在不方便使用指令的地方，可以使用全局方法 "),s("code",[t._v("$auth")]),t._v("，传递的参数与指令一致：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$auth("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Admin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$auth(["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("])"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Admin and Editor"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);