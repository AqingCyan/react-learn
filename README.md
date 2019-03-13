## React.js学习
从Vue框架的学习转到React，发现这是一个书写十分优雅的前端框架。因此，具有对比思维的学习React促使了这个仓库的诞生。学无止境，demo与笔记以及练手项目都会在这里一一说明展示。为以后的知识沉淀做铺垫。

<img src='http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552421871156&di=f03c4a3e4933f802c89990d450144b42&imgtype=0&src=http%3A%2F%2Fdynamic-image.yesky.com%2F640x-%2FuploadImages%2Fleadimage%2F2015%2F299%2F50%2F92Z77CVO445Q_W.png' style="height: 150px;text-align:center"/>

### 从TodoList开始

进入todolist阅读源码并且配合笔记使用更佳，对于最初的React基础使用以及虚拟DOM的了解，到最后的生命周期函数的查看，这里十分清晰明了。

- 进入对应目录
```shell
cd todolis
```
- 安装依赖
```shell
npm install
```
- 运行ReactDemo
```shell
npm run start
```

#### 笔记配合阅读
- [入门：从todolist开始](./book/01.从TodoList开始.md)
- [理解：虚拟DOM是什么？](./book/03.虚拟DOM.md)
- [理解：Diff算法是性能飞跃的核心](./book/04.虚拟DOM的Diff算法.md)
- [掌握：生命周期函数](./book/生命周期.md)

### 利用生命周期函数优化demo
既然学习了生命周期函数，并且要求掌握这个核心概念，我们就可以从之前的TodoList中挑刺了，配合笔记，我们可以理解为何会有这样的变动，一切都是为了性能的优化。

- 进入对应目录
```shell
cd 生命周期的应用demo
```
- 安装依赖
```shell
npm install
```
- 运行ReactDemo
```shell
npm run start
```

### React动画的demo

React的动画实现依赖ReactTransition库的实现，具体内容建议结合代码和文档阅读。

- 进入对应目录

```shell
cd animation
```

- 安装依赖

```shell
npm install
```

- 运行ReactDemo

```shell
npm run start
```

### Redux管理数据与todolist的重构

如果项目变成大型项目，React作为视图层的框架显然不能够更好的处理数据层的内容。因此，我们需要一个抽离出来的模块去管理数据层的内容。Redux应运而生，这里对Redux做了一个详细的描述，并且对我们之前写的代码用Redux进行了重构。

#### 你应该了解的内容：

[Redux如何理解？](./book/Redux概念.md)

#### 你应该阅读的代码：

- 进入对应目录

```shell
cd todolist_antd
```

- 安装依赖

```shell
npm install
```

- 运行ReactDemo

```shell
npm run start
```