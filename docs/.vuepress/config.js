module.exports = {
  title: 'React学习指南',
  description: '我的React.js学习笔记与源码讲解',
  repo: 'https://github.com/AqingCyan/react.js-learn',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
  ],
  serviceWorker: false,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    repo: 'AqingCyan/react.js-learn',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    sidebar: [
      {
        title: '基础知识点',
        collapsable: false,
        children: [
          ['book/01.从TodoList开始', '从TodoList开始'],
          ['book/02.todolist的细节补充', 'Todo还有这些细节'],
          ['book/03.虚拟DOM.md', '虚拟DOM是什么'],
          ['book/04.虚拟DOM的Diff算法', 'Diff算法提升性能'],
          ['book/05.生命周期', '生命周期了解'],
          ['book/06.Redux的初步了解', 'Redux如何管理数据'],
          ['book/07.如何用Redux重构todo', '使用Redux来重构Todo']
        ]
      }
    ]
  },
  base: '/react.js-learn/'
}
