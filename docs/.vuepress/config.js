module.exports = {
  title: 'React学习指南',
  description: '我的React.js学习笔记与源码讲解',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2,// e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
  },
}
