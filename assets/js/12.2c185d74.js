(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{213:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("持续集成：使用 GitHub Actions 来帮你的应用自动化部署到 GitHub Pages")]),t._v(" "),a("p",[t._v("前文我们介绍了"),a("a",{attrs:{href:"/blog/deploy-vue-app-to-github-pages"}},[t._v("如何将 Vue 应用部署到 GitHub Pages")]),t._v("，考虑以下场景：在你每次对代码变动时，都要手动执行 "),a("code",[t._v("npm run build")]),t._v(" 操作来构建文件，然后再将构建好的文件推送到 "),a("code",[t._v("gh-pages")]),t._v(" 分支来重新部署 GitHub Pages。这些操作是一成不变且耗时耗力的，那么能否让机器替代我们来执行它们，好让部署变得“水到渠成”呢？本文将介绍如何使用 "),a("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),a("OutboundLink")],1),t._v(" 来解放我们枯燥的工作。")]),t._v(" "),a("p",[t._v("请注意，本文不是 GitHub Actions 的教程，如果你还不熟悉什么是 GitHub Actions，不妨读一读阮一峰的 "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions 入门教程"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("h3",{attrs:{id:"_1-创建个人访问令牌"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建个人访问令牌"}},[t._v("#")]),t._v(" 1.创建个人访问令牌")]),t._v(" "),a("p",[t._v("首先，你要创建一个用于授权 GitHub Actions 的标识，这就是个人访问令牌（personal access tokens）。关于如何创建这个令牌，请参考官方的"),a("a",{attrs:{href:"https://docs.github.com/cn/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇教程"),a("OutboundLink")],1),t._v("。请务必正确创建，因为接下来的配置中要用到。")]),t._v(" "),a("h3",{attrs:{id:"_2-创建我们的工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建我们的工作流"}},[t._v("#")]),t._v(" 2.创建我们的工作流")]),t._v(" "),a("p",[t._v("在项目的根目录下创建这样的目录："),a("code",[t._v(".github/workflows")]),t._v("，然后在这个目录下面新建一个 "),a("code",[t._v(".yml")]),t._v(" 文件，文件名可以任意取，比如 "),a("code",[t._v("deploy.yml")]),t._v("。")]),t._v(" "),a("p",[t._v("文件的内容参考如下：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# workflow 的名称。如果省略则默认为当前 workflow 的文件名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Venus CI/CD\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("venus-cicd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build & deploy venus\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用最新的 Ubuntu 系统作为编译部署的环境")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout codes\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2.3.4\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 node.js 运行环境")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup node\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v2.1.2\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12.x'")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置缓存依赖，加快下次安装依赖的速度")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache node modules\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v2.1.3\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**/node_modules'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/yarn.lock')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install dependencies\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn install\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Generate files\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn build\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将构建后的文件推送到 gh-pages")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Push to gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 填写项目所在仓库地址")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_REPO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" github.com/Codennnn/venus.git\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n        cd ./dist\n        git init\n        git config --local user.name "LeoKu"\n        git config --local user.email "czc12580520@gmail.com"\n        git add .\n        git commit -m "GitHub Actions Auto Builder at $(date +\'%Y-%m-%d %H:%M:%S\')"\n        git push --force --quiet "https://${{ secrets.ACCESS_TOKEN }}@$GITHUB_REPO" HEAD:gh-pages')]),t._v("\n")])])]),a("h2",{attrs:{id:"自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署"}},[t._v("#")]),t._v(" 自动化部署")]),t._v(" "),a("p",[t._v("完成了以上两个步骤，以后每当你将代码推送到 "),a("code",[t._v("main")]),t._v(" 分支时，都会触发 GitHub Actions 来执行工作流。")]),t._v(" "),a("p",[t._v("GitHub Actions 任务列表：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/chinesee/images/raw/master/blog/5.png",alt:"GitHub Actions 任务列表"}})]),t._v(" "),a("p",[t._v("GitHub Actions 任务详情：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/chinesee/images/raw/master/blog/6.png",alt:"GitHub Actions 任务详情"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);