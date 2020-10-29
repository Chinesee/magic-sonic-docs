module.exports = {
  evergreen: true,
  // theme: 'vuepress-theme-sonic',
  theme: require.resolve('../../../vuepress-theme-sonic/vuepress-theme-sonic/'),
  head: [
    ['link', { rel: 'icon', href: '/logo/logo-icon.png' }],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Venus',
      description: 'Venus 是由 Vue.js 构建的网站开发模板，可帮助你快速搭建一个后台管理系统。',
    },
  },

  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/Chinesee/magic-sonic-docs',
    lastUpdated: '最近更新',
    nav: [
      {
        text: '文档',
        link: '/docs/base/introduction',
        items: [
          {
            text: '入门',
            items: [
              { text: '介绍', link: '/docs/base/introduction' },
              { text: '开始使用', link: '/docs/base/getting-started' },
            ],
          },
          {
            text: '开发',
            items: [
              { text: '布局', link: '/docs/dev/layout' },
              { text: '路由和菜单', link: '/docs/dev/router-and-nav' },
            ],
          },
          {
            text: '进阶',
            items: [
              { text: '环境变量', link: '/docs/advanced/environment-variables' },
            ],
          },
          {
            text: '其他',
            items: [
              { text: '常见问题', link: '/docs/other/faq' },
            ],
          },
        ],
      },
      { text: '帮助', link: '/' },
      { text: '关于作者', link: 'https://chinesee.gitee.io/blog-nuxt/' },
    ],
    sidebar: [
      {
        title: '入门',
        // sidebarDepth: 1,
        collapsable: false,
        children: [
          '/docs/base/introduction',
          '/docs/base/getting-started',
          '/docs/base/executable-script',
        ],
      },
      {
        title: '开发',
        // sidebarDepth: 1,
        collapsable: false,
        children: [
          '/docs/dev/layout',
          '/docs/dev/router-and-nav',
          '/docs/dev/style',
          '/docs/dev/network-request',
        ],
      },
      {
        title: '进阶',
        // sidebarDepth: 1,
        collapsable: false,
        children: [
          '/docs/advanced/environment-variables',
        ],
      },
      {
        title: '其他',
        // sidebarDepth: 1,
        collapsable: false,
        children: [
          '/docs/other/resource',
          '/docs/other/faq',
          '/docs/other/change-log',
        ],
      },
    ],
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
  },

  markdown: {
    anchor: { level: 2 },
  },

  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  },
}